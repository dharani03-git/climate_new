import { APPS_SCRIPT_URL } from "./config";

// Session generation
export const generateSessionId = () => {
    let sid = sessionStorage.getItem("nexus_session_id");
    if (!sid) {
        sid = 'sess_' + Math.random().toString(36).substring(2, 15);
        sessionStorage.setItem("nexus_session_id", sid);
    }
    return sid;
};

export const generateVisitorId = () => {
    let vid = localStorage.getItem("nexus_visitor_id");
    if (!vid) {
        vid = 'vis_' + Math.random().toString(36).substring(2, 15);
        localStorage.setItem("nexus_visitor_id", vid);
    }
    return vid;
};

export const trackData = async (sheetName: string, data: any) => {
    if (!APPS_SCRIPT_URL) return;
    try {
        const payload = {
            sheetName,
            sessionId: generateSessionId(),
            visitorId: generateVisitorId(),
            timestamp: new Date().toISOString(),
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
    const payload = {
        sheetName: "ContactForm",
        sessionId: generateSessionId(),
        visitorId: generateVisitorId(),
        timestamp: new Date().toISOString(),
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
