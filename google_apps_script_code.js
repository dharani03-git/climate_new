/**
 * ISI Analytics Google Apps Script (V5)
 * Features:
 * - Auto-Provisioning (Creates tabs/headers automatically on first hit)
 * - Upsert Logic for UserBehaviorLibrary & EngagementMetrics
 * - Robust IP / Location field mapping (handles all naming variants)
 * - Timestamp normalization (unix ms → ISO string)
 * - Business-hours cron filter for recurring tasks
 */

// ── Sheet Configurations ───────────────────────────────────────────────────────
var masterMetrics = [
    "Session ID", "Visitor ID", "Organization", "IP Address", "IP Location", "Variant",
    "Viewport", "OS", "Screen Resolution", "Connection Type", "Language", "Dark Theme",
    "Time Zone", "Page Depth", "Active Tab", "Session Age", "Initial Source", "Landing Page",
    "UTM Medium", "UTM Campaign", "Referrer Host", "Search Engine", "First Visit Date",
    "Returning User", "Cursor Velocity", "Rage Clicks", "Scroll Velocity", "Max Scroll Depth",
    "Total Click Count", "Average Dwell Time", "Total Active Time", "Idle Time", "Tab Switches",
    "Exit Intent Triggered", "Interaction Frequency", "Last Active Timestamp", "Lead Generated",
    "Form Started", "Form Abandoned", "Form Last Field", "Ebook Downloaded",
    "Consultation Requested", "Partner Inquiry Count", "Career Inquiry Count",
    "WhatsApp Widget Interactions", "CTA Conversion Rate", "Interest Banking", "Interest Retail",
    "Interest Logistics", "Interest School Safety", "Interest Campus Safety",
    "Interest Cash Logistics", "Interest Command Center", "Interest Services",
    "Interest Commercial", "Interest Residential", "Map Interactions", "Offices Explored",
    "Job Views", "Certification Views", "Carousel Slide Swipes", "Testimonials Viewed",
    "Philosophy Views", "Trust Metric Engagement", "Benefits Section Views",
    "Footer Navigation Usage", "Weighted Rank", "Engagement Score", "Segment",
    "Hot Lead Flag", "Intent Rank", "Dwell Time", "Interactions", "Tree", "Timestamp"
];

var TAB_CONFIGS = {
    "UserBehaviorLibrary": masterMetrics,
    "TrafficAnalytics": [
        "Session ID", "Visitor ID", "Page Path", "Page Title", "Referrer", "Traffic Source",
        "Organization", "IP Location", "IP Address", "Variant", "Timestamp"
    ],
    "EngagementMetrics": [
        "Session ID", "Visitor ID", "Page URL", "Duration (sec)", "Scroll Depth (%)", "Click Count",
        "Engagement Score", "CTA Clicked", "Returning User", "Is Hot Lead", "Variant", "Timestamp"
    ],
    "BehaviorMetrics": [
        "Session ID", "Visitor ID", "Page URL", "Category", "Metric Name", "Value",
        "Element Info", "Metadata", "IP Location", "IP Address", "Variant", "Timestamp"
    ],
    "ContactForm": [
        "Name", "Email", "Company", "Designation", "Phone", "Location", "Service Interest",
        "Source", "Message", "Status", "IP Location", "IP Address", "Variant", "Timestamp"
    ],
    "PartnerApps": [
        "Name", "Email", "Company", "Designation", "Phone", "Location", "Partnership Type",
        "Message", "Status", "IP Location", "IP Address", "Variant", "Timestamp"
    ],
    "CareerApps": [
        "Name", "Email", "Phone", "Job Title", "Resume File Name", "Cover Letter",
        "Status", "IP Location", "IP Address", "Variant", "Timestamp"
    ],
    "EbookDownloads": [
        "School Name", "Role", "Email", "Phone", "Source", "Follow Up Status",
        "IP Location", "IP Address", "Variant", "Timestamp"
    ],
    "ConsultationReqs": [
        "Name", "School Name", "Board", "Number of Students", "Primary Concern", "Email",
        "Phone", "City", "Status", "IP Location", "IP Address", "Variant", "Timestamp"
    ],
    "ChatbotLeads": [
        "Name", "Email", "Phone", "Message", "Status",
        "IP Location", "IP Address", "Organization", "Variant", "Timestamp"
    ]
};

// ── Main POST Handler ──────────────────────────────────────────────────────────
function doPost(e) {
    try {
        var ss = SpreadsheetApp.getActiveSpreadsheet();
        var data = JSON.parse(e.postData.contents);
        var sheetName = data.sheetName;

        if (!sheetName) {
            return ContentService.createTextOutput("Error: No sheetName").setMimeType(ContentService.MimeType.TEXT);
        }

        // 1. Ensure sheet exists with correct headers
        var sheet = ss.getSheetByName(sheetName);
        if (!sheet) {
            sheet = ss.insertSheet(sheetName);
            var defaultHeaders = TAB_CONFIGS[sheetName] || Object.keys(data).filter(function (k) { return k !== 'sheetName'; });
            sheet.getRange(1, 1, 1, defaultHeaders.length)
                .setValues([defaultHeaders])
                .setFontWeight("bold")
                .setBackground("#1a1a2e")
                .setFontColor("#ffffff");
            sheet.setFrozenRows(1);
        }

        // 2. Read current headers
        var lastCol = Math.max(sheet.getLastColumn(), 1);
        var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];

        // 3. Map data to row using headers
        var newRow = headers.map(function (header) {
            return resolveField(header, data);
        });

        // 4. UPSERT for sessions-based sheets (update if session exists)
        if (sheetName === "UserBehaviorLibrary" || sheetName === "EngagementMetrics") {
            var lastRow = sheet.getLastRow();
            if (lastRow > 1) {
                var sessionCol = sheet.getRange(2, 1, lastRow - 1, 1).getValues().flat();
                var rowIndex = sessionCol.indexOf(data.sessionId);
                if (rowIndex !== -1) {
                    sheet.getRange(rowIndex + 2, 1, 1, newRow.length).setValues([newRow]);
                    return ContentService.createTextOutput("Updated").setMimeType(ContentService.MimeType.TEXT);
                }
            }
        }

        // 5. Append new row
        sheet.appendRow(newRow);
        return ContentService.createTextOutput("Saved").setMimeType(ContentService.MimeType.TEXT);

    } catch (err) {
        // Log error but don't crash — return error message
        console.error("doPost error:", err.toString());
        return ContentService.createTextOutput("Error: " + err.toString()).setMimeType(ContentService.MimeType.TEXT);
    }
}

// ── Field Resolver: maps header names → data values ──────────────────────────
function resolveField(header, data) {
    // ── Explicit mappings for fields with naming variations ──────────────────
    var explicitMap = {
        "IP Location": data.location || data.ipLocation || data["IP Location"] || "",
        "IP Address": data.ipAddress || data.ip_address || data["IP Address"] || "",
        "Organization": data.organization || data.org || data["Organization"] || "",
        "Session ID": data.sessionId || data["Session ID"] || "",
        "Visitor ID": data.visitorId || data["Visitor ID"] || "",
        "Page Path": data.pagePath || data["Page Path"] || "",
        "Page Title": data.pageTitle || data["Page Title"] || "",
        "Traffic Source": data.trafficSource || data["Traffic Source"] || "",
        "Page URL": data.pageUrl || data["Page URL"] || "",
        "Duration (sec)": data.duration || data["Duration (sec)"] || "",
        "Scroll Depth (%)": data.scrollDepth || data["Scroll Depth (%)"] || "",
        "Click Count": data.clickCount || data["Click Count"] || "",
        "Engagement Score": data.engagementScore || data["Engagement Score"] || "",
        "CTA Clicked": data.ctaClicked || data["CTA Clicked"] || "",
        "Returning User": data.returningUser || data["Returning User"] || "",
        "Is Hot Lead": data.isHotLead || data["Is Hot Lead"] || "",
        "Metric Name": data.metricName || data["Metric Name"] || "",
        "Element Info": data.elementInfo || data["Element Info"] || "",
        "Hot Lead Flag": data.hotLeadFlag || data["Hot Lead Flag"] || "",
        "Intent Rank": data.intentRank || data["Intent Rank"] || "",
        "Dark Theme": (data.darkTheme !== undefined) ? String(data.darkTheme) : "",
        "Active Tab": (data.activeTab !== undefined) ? String(data.activeTab) : "",
        "Lead Generated": (data.leadGenerated !== undefined) ? String(data.leadGenerated) : "",
        "Form Started": (data.formStarted !== undefined) ? String(data.formStarted) : "",
        "Form Abandoned": (data.formAbandoned !== undefined) ? String(data.formAbandoned) : "",
        "Exit Intent Triggered": (data.exitIntentTriggered !== undefined) ? String(data.exitIntentTriggered) : "",
        "Ebook Downloaded": (data.ebookDownloaded !== undefined) ? String(data.ebookDownloaded) : "",
        "Consultation Requested": (data.consultationRequested !== undefined) ? String(data.consultationRequested) : "",
        "Timestamp": normalizeTimestamp(data.timestamp || data.Timestamp)
    };

    if (explicitMap.hasOwnProperty(header)) {
        var val = explicitMap[header];
        return (val !== null && typeof val === 'object') ? JSON.stringify(val) : (val === undefined ? "" : val);
    }

    // ── Generic camelCase slug mapping ───────────────────────────────────────
    // Convert "Initial Source" → "initialSource", "UTM Medium" → "utmMedium", etc.
    var slug = header
        .replace(/\(.*?\)/g, '')   // Remove (sec), (%)
        .trim()
        .split(' ')
        .map(function (word, i) {
            if (i === 0) return word.charAt(0).toLowerCase() + word.slice(1);
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');

    var value = data[slug];
    if (value === undefined) value = data[header];  // Try exact header as key
    if (value === undefined) value = "";

    return (value !== null && typeof value === 'object') ? JSON.stringify(value) : value;
}

// ── Timestamp normalizer: unix ms number → ISO string ────────────────────────
function normalizeTimestamp(ts) {
    if (!ts) return new Date().toISOString();
    if (typeof ts === 'number' || (typeof ts === 'string' && /^\d{10,13}$/.test(ts))) {
        var ms = Number(ts);
        // If 10-digit (seconds), convert to ms
        if (ms < 1e12) ms = ms * 1000;
        return new Date(ms).toISOString();
    }
    return String(ts);
}

// ══════════════════════════════════════════════════════════════════════════════
// ── CRON JOBS / TIME-BASED AUTOMATION ────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════════════

/**
 * Run setupTriggers() ONCE manually from Apps Script UI.
 * NOTE: Google runs in UTC. IST = UTC+5:30.
 *   atHour(2) = 2 AM UTC = 7:30 AM IST
 *   atHour(3) = 3 AM UTC = 8:30 AM IST  ← Use this for "8 AM IST daily"
 *   atHour(8) = 8 AM UTC = 1:30 PM IST
 */
function setupTriggers() {
    // Remove existing ISI triggers to avoid duplicates
    ScriptApp.getProjectTriggers().forEach(function (t) {
        var fn = t.getHandlerFunction();
        if (['dailyReport', 'weeklyReport', 'checkWatchlist', 'recurringTask'].indexOf(fn) !== -1) {
            ScriptApp.deleteTrigger(t);
        }
    });

    // 1. Daily Report — fires every day at ~8:30 AM IST (3 AM UTC)
    ScriptApp.newTrigger("dailyReport")
        .timeBased()
        .everyDays(1)
        .atHour(3)
        .create();

    // 2. Weekly Report — every Friday at ~8:30 AM IST
    ScriptApp.newTrigger("weeklyReport")
        .timeBased()
        .onWeekDay(ScriptApp.WeekDay.FRIDAY)
        .atHour(3)
        .create();

    // 3. IP Watchlist Check — every 15 minutes (business-hours filter inside)
    ScriptApp.newTrigger("checkWatchlist")
        .timeBased()
        .everyMinutes(15)
        .create();

    console.log("✅ ISI Analytics Triggers created successfully!");
}

/**
 * Business-hours gate — wraps any function to only run Mon–Fri 9 AM–6 PM IST.
 * IST offset = UTC+5:30, so IST 9 AM = UTC 3:30 AM (hour 3–4).
 * IST 6 PM = UTC 12:30 PM (hour 12).
 */
function isBusinessHoursIST() {
    var now = new Date();
    var utcHour = now.getUTCHours();
    var utcMin = now.getUTCMinutes();
    var utcDay = now.getUTCDay(); // 0=Sun

    // Convert to IST: add 5 hours 30 minutes
    var istTotalMinutes = utcHour * 60 + utcMin + 330;
    var istHour = Math.floor(istTotalMinutes / 60) % 24;
    var istDay = (utcDay + (istTotalMinutes >= 1440 ? 1 : 0)) % 7;

    return (istDay >= 1 && istDay <= 5 && istHour >= 9 && istHour < 18);
}

// ── Daily Report ──────────────────────────────────────────────────────────────
function dailyReport() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var trafficSheet = ss.getSheetByName("TrafficAnalytics");
    if (!trafficSheet) return;

    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var dateStr = Utilities.formatDate(yesterday, "Asia/Kolkata", "yyyy-MM-dd");

    var data = trafficSheet.getDataRange().getValues();
    var headers = data[0];
    var tsCol = headers.indexOf("Timestamp");
    var ipCol = headers.indexOf("IP Address");
    var pathCol = headers.indexOf("Page Path");

    var todaySessions = 0;
    var uniqueIPs = new Set();
    var pageCounts = {};

    for (var i = 1; i < data.length; i++) {
        var ts = data[i][tsCol] ? String(data[i][tsCol]).substring(0, 10) : "";
        if (ts === dateStr) {
            todaySessions++;
            if (data[i][ipCol]) uniqueIPs.add(data[i][ipCol]);
            var page = data[i][pathCol] || "/";
            pageCounts[page] = (pageCounts[page] || 0) + 1;
        }
    }

    // Find top page
    var topPage = Object.keys(pageCounts).sort(function (a, b) { return pageCounts[b] - pageCounts[a]; })[0] || "N/A";

    // Append to DailyReports sheet
    var reportSheet = ss.getSheetByName("DailyReports") || ss.insertSheet("DailyReports");
    if (reportSheet.getLastRow() === 0) {
        reportSheet.appendRow(["Date", "Total Sessions", "Unique IPs", "Top Page", "Generated At"]);
        reportSheet.getRange(1, 1, 1, 5).setFontWeight("bold").setBackground("#1a1a2e").setFontColor("#ffffff");
    }
    reportSheet.appendRow([dateStr, todaySessions, uniqueIPs.size, topPage, new Date().toISOString()]);

    console.log("Daily report generated for " + dateStr);
}

// ── Weekly Report ─────────────────────────────────────────────────────────────
function weeklyReport() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var trafficSheet = ss.getSheetByName("TrafficAnalytics");
    if (!trafficSheet) return;

    var now = new Date();
    var weekStart = new Date(now);
    weekStart.setDate(now.getDate() - 7);

    var data = trafficSheet.getDataRange().getValues();
    var headers = data[0];
    var tsCol = headers.indexOf("Timestamp");
    var ipCol = headers.indexOf("IP Address");
    var pathCol = headers.indexOf("Page Path");
    var sourceCol = headers.indexOf("Traffic Source");

    var totalSessions = 0;
    var uniqueIPs = new Set();
    var pageCounts = {};
    var sourceCounts = {};

    for (var i = 1; i < data.length; i++) {
        var ts = data[i][tsCol] ? new Date(data[i][tsCol]) : null;
        if (ts && ts >= weekStart && ts <= now) {
            totalSessions++;
            if (data[i][ipCol]) uniqueIPs.add(data[i][ipCol]);
            var page = data[i][pathCol] || "/";
            var source = data[i][sourceCol] || "Direct";
            pageCounts[page] = (pageCounts[page] || 0) + 1;
            sourceCounts[source] = (sourceCounts[source] || 0) + 1;
        }
    }

    var topPages = Object.keys(pageCounts)
        .filter(function (p) { return p !== "/"; })
        .sort(function (a, b) { return pageCounts[b] - pageCounts[a]; })
        .slice(0, 5)
        .join(", ");

    var reportSheet = ss.getSheetByName("WeeklyReports") || ss.insertSheet("WeeklyReports");
    if (reportSheet.getLastRow() === 0) {
        reportSheet.appendRow(["Week Starting", "Week Ending", "Total Sessions", "Unique IPs", "Top 5 Pages (excl. home)", "Generated At"]);
        reportSheet.getRange(1, 1, 1, 6).setFontWeight("bold").setBackground("#1a1a2e").setFontColor("#ffffff");
    }
    reportSheet.appendRow([
        Utilities.formatDate(weekStart, "Asia/Kolkata", "yyyy-MM-dd"),
        Utilities.formatDate(now, "Asia/Kolkata", "yyyy-MM-dd"),
        totalSessions,
        uniqueIPs.size,
        topPages,
        new Date().toISOString()
    ]);

    console.log("Weekly report generated.");
}

// ── IP Watchlist Check ────────────────────────────────────────────────────────
function checkWatchlist() {
    if (!isBusinessHoursIST()) return; // Only alert during business hours

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var watchlistSheet = ss.getSheetByName("Watchlist");
    var trafficSheet = ss.getSheetByName("TrafficAnalytics");
    if (!watchlistSheet || !trafficSheet) return;

    var watchlistIPs = watchlistSheet.getRange(2, 1, Math.max(watchlistSheet.getLastRow() - 1, 1), 1)
        .getValues().flat().filter(String);
    if (watchlistIPs.length === 0) return;

    var trafficData = trafficSheet.getDataRange().getValues();
    var headers = trafficData[0];
    var ipCol = headers.indexOf("IP Address");
    var tsCol = headers.indexOf("Timestamp");
    var pathCol = headers.indexOf("Page Path");

    var fifteenMinAgo = new Date(Date.now() - 15 * 60 * 1000);

    var alerts = [];
    for (var i = 1; i < trafficData.length; i++) {
        var ts = trafficData[i][tsCol] ? new Date(trafficData[i][tsCol]) : null;
        if (!ts || ts < fifteenMinAgo) continue;

        var ip = String(trafficData[i][ipCol] || "");
        if (watchlistIPs.indexOf(ip) !== -1) {
            alerts.push("IP: " + ip + " visited " + (trafficData[i][pathCol] || "/") + " at " + trafficData[i][tsCol]);
        }
    }

    if (alerts.length > 0) {
        MailApp.sendEmail({
            to: Session.getActiveUser().getEmail(),
            subject: "🚨 ISI Watchlist Alert: " + alerts.length + " match(es)",
            body: "Watchlist IP activity detected in last 15 minutes:\n\n" + alerts.join("\n")
        });
    }
}

// ── Manual test runner ────────────────────────────────────────────────────────
function recurringTask() {
    // Wrapper used by manual testing — runs all scheduled tasks
    dailyReport();
    checkWatchlist();
}

function buildReportsDashboard() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // ── Setup Sheet ───────────────────────────────────────────────────────────
    var SHEET_NAME = "📈 Reports & Trends";
    var sh = ss.getSheetByName(SHEET_NAME);
    if (sh) {
        sh.clearContents();
        sh.clearFormats();
        sh.getCharts().forEach(function (c) { sh.removeChart(c); });
    } else {
        sh = ss.insertSheet(SHEET_NAME);
        ss.setActiveSheet(sh);
        ss.moveActiveSheet(2); // After Analytics Dashboard
    }

    var DARK_BG = "#0f172a";
    var WHITE = "#ffffff";
    var ACCENT = "#6366f1";
    var GREEN = "#22c55e";
    var ORANGE = "#f59e0b";
    var CYAN = "#22d3ee";
    var RED = "#ef4444";

    // Column widths
    [180, 130, 130, 130, 40, 180, 130, 130].forEach(function (w, i) {
        sh.setColumnWidth(i + 1, w);
    });

    // ── TITLE ─────────────────────────────────────────────────────────────────
    sh.setRowHeight(1, 50);
    sh.getRange("A1:H1").merge()
        .setValue("📈  ISI Reports & Trigger History")
        .setBackground(DARK_BG)
        .setFontColor(WHITE)
        .setFontWeight("bold")
        .setFontSize(18)
        .setHorizontalAlignment("center")
        .setVerticalAlignment("middle");

    sh.setRowHeight(2, 24);
    sh.getRange("A2:H2").merge()
        .setFormula('="Dashboard refreshed: "&TEXT(NOW(),"dd-mmm-yyyy hh:mm")&" IST"')
        .setBackground("#1e293b")
        .setFontColor("#94a3b8")
        .setFontSize(9)
        .setHorizontalAlignment("center");

    // ── KPI Strip (Row 3) ─────────────────────────────────────────────────────
    sh.setRowHeight(3, 38);

    sh.getRange("A3").setFormula('=IFERROR("📅 Daily Reports Run: "&COUNTA(DailyReports!A:A)-1,0)')
        .setBackground("#1e293b").setFontColor(CYAN).setFontSize(10).setFontWeight("bold");

    sh.getRange("B3").setFormula('=IFERROR("📊 Weekly Reports Run: "&COUNTA(WeeklyReports!A:A)-1,0)')
        .setBackground("#1e293b").setFontColor(GREEN).setFontSize(10).setFontWeight("bold");

    sh.getRange("C3").setFormula('=IFERROR("🚨 Watchlist Alerts: "&COUNTIF(TrafficAnalytics!I:I,"<>"),0)')
        .setBackground("#1e293b").setFontColor(ORANGE).setFontSize(10).setFontWeight("bold");

    sh.getRange("D3").setFormula('=IFERROR("🔥 Hot Leads Total: "&COUNTIF(UserBehaviorLibrary!AR:AR,"YES"),0)')
        .setBackground("#1e293b").setFontColor(RED).setFontSize(10).setFontWeight("bold");

    sh.setFrozenRows(3);

    // ══════════════════════════════════════════════════════════════════════════
    // SECTION A: Daily Traffic Trend Table + Line Chart    [Col A–D, Row 5]
    // ══════════════════════════════════════════════════════════════════════════
    var SA = 5;
    sh.getRange(SA, 1, 1, 4).merge()
        .setValue("📅  Daily Traffic Trend (from DailyReports)")
        .setBackground(ACCENT).setFontColor(WHITE).setFontWeight("bold").setFontSize(11);
    sh.setRowHeight(SA, 32);

    // Column headers
    ["Date", "Sessions", "Unique IPs", "Top Page"].forEach(function (h, i) {
        sh.getRange(SA + 1, i + 1).setValue(h)
            .setBackground("#1e40af").setFontColor(WHITE).setFontWeight("bold").setFontSize(10);
    });

    // Pull last 14 days from DailyReports sheet
    sh.getRange(SA + 2, 1).setFormula(
        '=IFERROR(QUERY(DailyReports!A:E,' +
        '"SELECT A, B, C, D ORDER BY A DESC LIMIT 14",0),' +
        '{"No daily reports yet","","",""})'
    );

    // Style data rows
    for (var r = 0; r < 14; r++) {
        sh.getRange(SA + 2 + r, 1, 1, 4)
            .setBackground(r % 2 === 0 ? "#1e293b" : "#263148")
            .setFontColor(WHITE).setFontSize(10);
    }

    // ── Line Chart: Daily Sessions Trend ─────────────────────────────────────
    var chartA = sh.newChart()
        .setChartType(Charts.ChartType.LINE)
        .addRange(sh.getRange(SA + 1, 1, 16, 1))   // Dates (X axis)
        .addRange(sh.getRange(SA + 1, 2, 16, 1))   // Sessions (Y axis)
        .setPosition(SA, 6, 0, 0)
        .setNumHeaders(1)
        .setOption("title", "Daily Sessions Trend (Last 14 Days)")
        .setOption("titleTextStyle", { color: WHITE, fontSize: 12, bold: true })
        .setOption("backgroundColor", { fill: DARK_BG })
        .setOption("hAxis", {
            textStyle: { color: WHITE, fontSize: 8 },
            gridlines: { color: "#334155" }
        })
        .build();
    sh.insertChart(chartA);
}
