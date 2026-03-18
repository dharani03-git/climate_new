import { APPS_SCRIPT_URL } from "./config";

// Session generation
export const generateSessionId = () => {
    let sid = sessionStorage.getItem("trustgrid_session_id");
    if (!sid) {
        sid = 'sess_' + Math.random().toString(36).substring(2, 15);
        sessionStorage.setItem("trustgrid_session_id", sid);
    }
    return sid;
};

export const generateVisitorId = () => {
    let vid = localStorage.getItem("trustgrid_visitor_id");
    if (!vid) {
        vid = 'vis_' + Math.random().toString(36).substring(2, 15);
        localStorage.setItem("trustgrid_visitor_id", vid);
    }
    return vid;
};

let cachedIpData: { ipAddress?: string, ipLocation?: string } | null = null;

export const getIpData = async () => {
    if (cachedIpData) return cachedIpData;
    
    try {
        const stored = sessionStorage.getItem("trustgrid_ip_data");
        if (stored) {
            cachedIpData = JSON.parse(stored);
            return cachedIpData;
        }

        // Fetch user IP and Location details securely
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        
        cachedIpData = {
            ipAddress: data.ip || "Unknown",
            ipLocation: `${data.city || ''}, ${data.country_name || ''}`.replace(/^, | ,$/, '').trim() || "Unknown"
        };
        
        sessionStorage.setItem("trustgrid_ip_data", JSON.stringify(cachedIpData));
        return cachedIpData;
    } catch(e) {
        console.warn("Failed to fetch IP data:", e);
        return { ipAddress: "Unknown", ipLocation: "Unknown" };
    }
};

export const trackData = async (sheetName: string, data: any) => {
    if (!APPS_SCRIPT_URL) return;
    try {
        const ipData = await getIpData();

        const payload = {
            sheetName,
            sessionId: generateSessionId(),
            visitorId: generateVisitorId(),
            timestamp: new Date().toISOString(),
            ...ipData,
            ...data
        };

        await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(payload),
            // text/plain prevents the browser from sending a CORS preflight OPTIONS request
            // which Apps Script doesn't handle natively.
            headers: {
                'Content-Type': 'text/plain;charset=utf-8'
            }
        });
    } catch (e) {
        console.error("Analytics track failed", e);
    }
};

export const trackTraffic = (pagePath: string, pageTitle: string) => {
    trackData("TrafficAnalytics", {
        pagePath,
        pageTitle,
        trafficSource: document.referrer || "Direct",
        userAgent: navigator.userAgent
    });
};

export const trackBehavior = (category: string, metricName: string, value: string | number, elementInfo?: string) => {
    trackData("BehaviorMetrics", {
        pageUrl: window.location.pathname,
        category,
        metricName,
        value,
        elementInfo
    });
};

export const trackEngagement = (data: { duration?: number, scrollDepth?: number, clickCount?: number, ctaClicked?: string, isHotLead?: string, engagementScore?: number }) => {
    trackData("EngagementMetrics", {
        pageUrl: window.location.pathname,
        ...data
    });
};

export const upsertUserLibrary = (data: any) => {
    trackData("UserBehaviorLibrary", data);
};

export const submitContactForm = async (formData: any) => {
    if (!APPS_SCRIPT_URL) throw new Error("No Apps Script URL");
    
    const ipData = await getIpData();
    
    const payload = {
        sheetName: "ContactForm",
        sessionId: generateSessionId(),
        visitorId: generateVisitorId(),
        timestamp: new Date().toISOString(),
        ...ipData,
        ...formData
    };

    const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'text/plain;charset=utf-8'
        }
    });

    if (!res.ok) {
        throw new Error("Failed to submit form");
    }
    return res;
};
