// CookieConsent.jsx
import { useEffect, useState } from "react";

const LS_KEY = "cookie-consent:v1";

const defaultPrefs = {
  necessary: true,    // always true (can't be turned off)
  analytics: false,
  marketing: false,
};

function loadPrefs() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function savePrefs(prefs) {
  localStorage.setItem(LS_KEY, JSON.stringify(prefs));
  window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: prefs }));
}

export default function CookieConsent({ policyHtml }) {
  const [prefs, setPrefs] = useState(defaultPrefs);
  const [visible, setVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);

  useEffect(() => {
    const existing = loadPrefs();
    if (!existing) {
      setVisible(true); // show banner for first-time visitors
    } else {
      setPrefs({ ...defaultPrefs, ...existing, necessary: true });
      setVisible(false);
    }
  }, []);

  const acceptAll = () => {
    const next = { necessary: true, analytics: true, marketing: true };
    setPrefs(next);
    savePrefs(next);
    setVisible(false);
    setShowManage(false);
  };

  const rejectAll = () => {
    const next = { necessary: true, analytics: false, marketing: false };
    setPrefs(next);
    savePrefs(next);
    setVisible(false);
    setShowManage(false);
  };

  const saveSelection = () => {
    const next = { ...prefs, necessary: true };
    savePrefs(next);
    setVisible(false);
    setShowManage(false);
  };

  return (
    <>
      {/* Banner */}
      {visible && (
        <div style={styles.banner}>
          <div style={styles.bannerInner}>
            <div style={{ flex: 1 }}>
              <strong>We use cookies</strong>
              <div style={{ fontSize: 14, opacity: 0.9, marginTop: 6 }}>
                We use necessary cookies to run the site, and optionally analytics/marketing
                to improve your experience.{" "}
                <button
                  onClick={() => setShowManage(true)}
                  style={styles.linkBtn}
                >
                  Manage preferences
                </button>
                {" · "}
                <a href="/privacy-policy" style={styles.linkA}>Privacy Policy</a>
              </div>
            </div>
            <div style={styles.btnRow}>
              <button onClick={rejectAll} style={styles.btnGhost}>Reject all</button>
              <button onClick={() => setShowManage(true)} style={styles.btnGhost}>Customize</button>
              <button onClick={acceptAll} style={styles.btnPrimary}>Accept all</button>
            </div>
          </div>
        </div>
      )}

      {/* Manage modal */}
      {showManage && (
        <div style={styles.modalWrap} onClick={() => setShowManage(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ marginTop: 0 }}>Cookie preferences</h3>

            <div style={styles.group}>
              <label style={styles.row}>
                <input type="checkbox" checked readOnly />
                <span style={styles.labelText}>
                  Necessary cookies
                  <small style={styles.small}> Always enabled to provide core site functionality.</small>
                </span>
              </label>
            </div>

            <div style={styles.group}>
              <label style={styles.row}>
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
                />
                <span style={styles.labelText}>
                  Analytics cookies
                  <small style={styles.small}> Help us understand usage to improve the site.</small>
                </span>
              </label>
            </div>

            <div style={styles.group}>
              <label style={styles.row}>
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={(e) => setPrefs((p) => ({ ...p, marketing: e.target.checked }))}
                />
                <span style={styles.labelText}>
                  Marketing cookies
                  <small style={styles.small}> Used to deliver relevant advertising.</small>
                </span>
              </label>
            </div>

            {policyHtml && (
              <details style={{ marginTop: 12 }}>
                <summary style={{ cursor: "pointer" }}>Cookie Policy</summary>
                <div
                  style={{ marginTop: 8, maxHeight: 180, overflow: "auto", fontSize: 14 }}
                  dangerouslySetInnerHTML={{ __html: policyHtml }}
                />
              </details>
            )}

            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 16 }}>
              <button onClick={rejectAll} style={styles.btnGhost}>Reject all</button>
              <button onClick={acceptAll} style={styles.btnPrimary}>Accept all</button>
              <button onClick={saveSelection} style={styles.btnAccent}>Save selection</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  banner: {
    position: "fixed",
    left: 16, right: 16, bottom: 16,
    background: "#111", color: "#fff",
    borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    zIndex: 9999,
  },
  bannerInner: {
    display: "flex", gap: 16, alignItems: "center",
    padding: "16px 18px", flexWrap: "wrap",
  },
  btnRow: { display: "flex", gap: 8, marginLeft: "auto" },
  btnPrimary: {
    background: "#0ea5e9", color: "#fff", border: 0,
    padding: "10px 14px", borderRadius: 10, cursor: "pointer", fontWeight: 600,
  },
  btnAccent: {
    background: "#22c55e", color: "#fff", border: 0,
    padding: "10px 14px", borderRadius: 10, cursor: "pointer", fontWeight: 600,
  },
  btnGhost: {
    background: "transparent", color: "#fff",
    border: "1px solid rgba(255,255,255,0.3)",
    padding: "10px 14px", borderRadius: 10, cursor: "pointer",
  },
  linkBtn: {
    background: "transparent", color: "#0ea5e9",
    border: 0, padding: 0, cursor: "pointer",
  },
  linkA: { color: "#0ea5e9", textDecoration: "underline" },
  modalWrap: {
    position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
    display: "grid", placeItems: "center", zIndex: 10000,
  },
  modal: {
    width: "min(680px, 92vw)",
    background: "#fff", color: "#111",
    borderRadius: 14, padding: 20,
    boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
  },
  group: { padding: "10px 0", borderBottom: "1px solid #eee" },
  row: { display: "flex", gap: 12, alignItems: "start" },
  labelText: { display: "inline-flex", flexDirection: "column" },
  small: { display: "block", fontSize: 12, opacity: 0.75, marginTop: 4 },
};
