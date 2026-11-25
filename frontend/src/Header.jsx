import { useState, useEffect, useRef } from "react";

const menuDetails = {
  "Product overview": ["layers", "Explore the ZapDocs platform", "#315cff"],
  "Loan workflow": ["flow", "From loan data to closing documents", "#0899ae"],
  "Private lenders": ["home", "Prepare private lending packages", "#315cff"],
  "Loan originators": ["file", "Capture terms and prepare documents", "#a34be7"],
  "Servicing teams": ["calendar", "Organize payment and servicing details", "#0899ae"],
  "Broker workflows": ["case", "Streamline broker and investor paperwork", "#e76d50"],
  "Loan preparation workflow": ["flow", "See how loan preparation works", "#315cff"],
  "Book a Demo": ["calendar", "See ZapDocs in action", "#0899ae"],
  "Document outputs": ["layers", "Explore available loan documents", "#a34be7"],
  "Document generation": ["file", "Prepare state-specific documents", "#315cff"],
  "View pricing plans": ["price", "Compare plans and package costs", "#315cff"],
  "Privacy": ["shield", "Learn how information is handled", "#0899ae"],
  "Terms": ["file", "Review website and service terms", "#a34be7"],
};
const iconPaths = {
  layers: "M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5",
  flow: "M3 4h7v6H3zM14 14h7v6h-7zM7 10v7h7M11 14l3 3-3 3",
  home: "m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7",
  file: "M5 3h9l5 5v13H5zM14 3v6h5M8 13h8M8 17h8",
  calendar: "M4 5h16v16H4zM8 3v4M16 3v4M4 10h16M8 14h2M14 14h2M8 18h2",
  case: "M3 7h18v13H3zM8 7V4h8v3M3 12h18M10 12v2h4v-2",
  price: "M12 2v20M17 6H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H7",
  shield: "m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6zM8 12l3 3 5-5",
};
function MenuIcon({ name, color }) {
  return <span className="zap-menu-icon" style={{color}} aria-hidden="true"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={iconPaths[name] || iconPaths.file}/></svg></span>;
}

export default function Header({ onLaunch, onPricing, onDemo, onHome } = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(null);
  const root = useRef(null);
  const closeTimer = useRef(null);
  const cancelClose = () => clearTimeout(closeTimer.current);
  const hoverOpen = (name, event) => { if (event.pointerType !== "mouse" || menuOpen) return; cancelClose(); setActive(name); };
  const hoverClose = (event) => { if (event.pointerType !== "mouse" || menuOpen) return; cancelClose(); closeTimer.current = setTimeout(() => setActive(null), 220); };
  useEffect(() => {
    const outside = e => { if (!root.current?.contains(e.target)) { setActive(null); setMenuOpen(false); } };
    const escape = e => { if (e.key === "Escape") { setActive(null); setMenuOpen(false); } };
    document.addEventListener("pointerdown", outside); document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", escape); clearTimeout(closeTimer.current); };
  }, []);
  const navigate = (path, callback) => { cancelClose(); setActive(null); setMenuOpen(false); if (typeof callback === "function") callback(); else window.location.assign(path); };
  const openApp = () => navigate("/app", onLaunch);
  const openPricing = () => navigate("/pricing", onPricing);
  const openDemo = () => navigate("/demo", onDemo);
  const goHome = () => { setActive(null); setMenuOpen(false); if (window.location.pathname === "/") window.scrollTo({top:0,behavior:"smooth"}); else navigate("/", onHome); };
  const scrollTo = (id) => { setActive(null); setMenuOpen(false); const target = window.location.pathname === "/" && document.getElementById(id); if(target) target.scrollIntoView({behavior:"smooth"}); else window.location.assign("/#"+id); };
  const menus = [
    ["Platform", [["Product overview", () => scrollTo("platform")], ["Loan workflow", () => scrollTo("workflow")]]],
    ["Lenders", [["Private lenders", () => navigate("/private-lenders")], ["Loan originators", () => navigate("/loan-originators")], ["Servicing teams", () => navigate("/servicing-teams")], ["Broker workflows", () => navigate("/broker-workflows")]]],
    ["How it works", [["Loan preparation workflow", () => scrollTo("workflow")], ["Book a Demo", openDemo]]],
    ["Documents", [["Document outputs", () => scrollTo("outputs")], ["Document generation", () => scrollTo("workflow")]]],
    ["Pricing", [["View pricing plans", openPricing], ["Book a Demo", openDemo]]],
    ["Company", [["Book a Demo", openDemo], ["Privacy", () => navigate("/privacy")], ["Terms", () => navigate("/terms")]]],
  ];
  const renderMenus = () => menus.map(([name, items]) => (
    <div className="zap-header-menu" key={name} onPointerEnter={e => hoverOpen(name, e)} onPointerLeave={hoverClose}>
      <button type="button" className="zap-link zap-header-trigger" aria-expanded={active === name} onClick={() => { cancelClose(); setActive(v => v === name ? null : name); }}>
        {name}<svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <div className="zap-header-dropdown" data-open={active === name} inert={active !== name ? true : undefined} aria-hidden={active !== name}><div className="zap-dropdown-label">{name}</div>{items.map(([label, action]) => { const [icon, description, color] = menuDetails[label] || ["file", "", "#315cff"]; return <button type="button" key={label} onClick={action} className="zap-dropdown-entry"><MenuIcon name={icon} color={color}/><span className="zap-dropdown-copy"><strong>{label}</strong><small>{description}</small></span></button>; })}</div>
    </div>
  ));
  return (
<header className="zap-nav-wrap" ref={root}>
<style>{`        .zap-nav-wrap {
          --zap-ink: #0b1d2c;
          --zap-navy: #0a2238;
          --zap-navy-2: #102f49;
          --zap-blue: #3f6df6;
          --zap-blue-dark: #2d55cf;
          --zap-sky: #dce9ff;
          --zap-mint: #c8f1df;
          --zap-paper: #f7f8f6;
          --zap-line: #dbe2e8;
          --zap-muted: #5f6f7c;
          --zap-white: #ffffff;
        }

        .zap-nav-wrap {
          position: sticky;
          top: 0;
          z-index: 40;
          background: rgba(247, 248, 246, 0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(219, 226, 232, 0.75);
        }

        .zap-nav {
          max-width: 1220px;
          margin: 0 auto;
          height: 78px;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        .zap-brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--zap-ink);
          text-decoration: none;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.04em;
          cursor: pointer;
        }

        .zap-brand-mark {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          color: #fff;
          background: var(--zap-navy);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.13);
          font-size: 17px;
        }

        .zap-nav-links {
          display: flex;
          align-items: center;
          gap: 26px;
          margin-left: auto;
        }

        .zap-link {
          border: 0;
          background: transparent;
          color: #314452;
          font-size: 14px;
          font-weight: 650;
          cursor: pointer;
          padding: 8px 0;
        }

        .zap-link:hover { color: var(--zap-blue); }

        .zap-nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .zap-btn {
          border: 0;
          border-radius: 999px;
          min-height: 46px;
          padding: 0 20px;
          font-weight: 750;
          cursor: pointer;
          transition: transform .18s ease, background .18s ease, box-shadow .18s ease;
        }

        .zap-btn:hover { transform: translateY(-1px); }

        .zap-btn-primary {
          color: #fff;
          background: var(--zap-blue);
          box-shadow: 0 10px 24px rgba(63,109,246,.22);
        }
        .zap-btn-primary:hover { background: var(--zap-blue-dark); }

        .zap-btn-dark {
          color: #fff;
          background: var(--zap-navy);
          box-shadow: 0 12px 30px rgba(10,34,56,.18);
        }

        .zap-btn-ghost {
          color: var(--zap-ink);
          background: #fff;
          border: 1px solid var(--zap-line);
        }

        .zap-menu-btn {
          display: none;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          border: 1px solid var(--zap-line);
          background: #fff;
          cursor: pointer;
        }


.zap-nav-wrap {font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: var(--zap-ink); text-align:left; }
.zap-nav-wrap * {box-sizing:border-box;}
.zap-nav-wrap button {font:inherit;}
.zap-nav-wrap .zap-brand {border:0;background:transparent;padding:0;}
@media (max-width:980px) {
.zap-nav-links { display:none; }
.zap-nav-actions .zap-btn-ghost { display:none; }
.zap-menu-btn { display:grid; place-items:center; }
.zap-mobile-menu { position:absolute;top:70px;left:18px;right:18px;border:1px solid var(--zap-line);border-radius:16px;background:#fff;padding:14px;box-shadow:0 20px 50px rgba(11,29,44,.12); }
.zap-mobile-menu .zap-link {display:block;width:100%;text-align:left;padding:12px;}
}
@media(max-width:680px){.zap-nav{height:68px;padding:0 18px;}.zap-nav-actions .zap-btn-primary{display:none;}}

.zap-nav-wrap .zap-header-menu{position:relative;}
.zap-nav-wrap .zap-header-trigger{display:inline-flex;align-items:center;gap:5px;white-space:nowrap;}
.zap-header-trigger[aria-expanded=true] svg{transform:rotate(180deg);}
.zap-nav-wrap .zap-header-dropdown{position:absolute;top:100%;left:0;min-width:220px;padding:8px;background:#fff;border:1px solid var(--zap-line);border-radius:14px;box-shadow:0 16px 40px #0b1d2c20;z-index:80;}
.zap-nav-wrap .zap-header-dropdown button{display:block;width:100%;border:0;background:none;text-align:left;color:var(--zap-ink);padding:12px;border-radius:8px;font-size:14px;cursor:pointer;}
.zap-nav-wrap .zap-header-dropdown button:hover{background:#edf2ff;color:var(--zap-blue);}
.zap-nav-wrap .zap-brand-mark{background:none;box-shadow:none;}
@media(max-width:980px){.zap-nav-wrap .zap-mobile-menu .zap-header-dropdown{position:static;box-shadow:none;margin-bottom:6px;}.zap-nav-wrap .zap-mobile-menu .zap-header-trigger{display:flex;justify-content:space-between;}}

.zap-nav-wrap .zap-header-trigger{transition:color .18s ease;}
.zap-nav-wrap .zap-header-trigger svg{transition:transform .24s ease;}
.zap-nav-wrap .zap-header-trigger[aria-expanded=true]{color:var(--zap-blue);}
.zap-nav-wrap .zap-header-dropdown{opacity:0;visibility:hidden;pointer-events:none;transform:translateY(8px);transition:opacity .2s ease,transform .24s cubic-bezier(.2,.75,.25,1),visibility .24s;}
.zap-nav-wrap .zap-header-dropdown[data-open=true]{opacity:1;visibility:visible;pointer-events:auto;transform:translateY(0);}
.zap-nav-wrap .zap-header-dropdown button{transition:background .16s ease,color .16s ease;}
.zap-nav-wrap .zap-nav-links{gap:20px;}
@media(min-width:981px){.zap-nav-wrap .zap-header-menu:last-child .zap-header-dropdown{left:auto;right:0;}}
@media(max-width:1150px){.zap-nav-wrap .zap-nav-links{gap:12px;}.zap-nav-wrap .zap-nav{gap:14px;}}
@media(max-width:980px){.zap-nav-wrap .zap-mobile-menu .zap-header-dropdown[data-open=false]{display:none;}.zap-nav-wrap .zap-mobile-menu .zap-header-dropdown[data-open=true]{display:block;}}
@media(prefers-reduced-motion:reduce){.zap-nav-wrap .zap-header-dropdown,.zap-nav-wrap .zap-header-trigger svg,.zap-nav-wrap .zap-header-dropdown button{transition:none;}}

.zap-nav-wrap .zap-header-dropdown{width:330px;padding:17px 12px;}
.zap-nav-wrap .zap-dropdown-label{padding:0 12px 9px;text-transform:uppercase;letter-spacing:.12em;font-size:11px;font-weight:750;color:#5f6f7c;}
.zap-nav-wrap .zap-header-dropdown .zap-dropdown-entry{display:flex;align-items:flex-start;gap:12px;padding:11px 12px;}
.zap-nav-wrap .zap-menu-icon{width:30px;height:30px;flex:0 0 30px;display:grid;place-items:center;border-radius:7px;background:color-mix(in srgb,currentColor 9%,white);}
.zap-nav-wrap .zap-dropdown-copy{min-width:0;display:block;}
.zap-nav-wrap .zap-dropdown-copy strong{display:block;font-size:14px;font-weight:650;line-height:1.4;}
.zap-nav-wrap .zap-dropdown-copy small{display:block;margin-top:4px;font-size:12px;color:#64748b;line-height:1.45;}
@media(min-width:981px){.zap-nav-wrap .zap-header-menu:nth-last-child(-n+3) .zap-header-dropdown{left:auto;right:0;}}
@media(max-width:980px){.zap-nav-wrap .zap-mobile-menu .zap-header-dropdown{width:100%;min-width:0;}.zap-nav-wrap .zap-mobile-menu{max-height:calc(100dvh - 85px);overflow-y:auto;}}

/* Compact navigation — shared across all ZapDocs pages. */
.zap-nav-wrap { background: rgba(247,248,246,.97); }
.zap-nav-wrap .zap-nav { max-width: 1280px; height: 66px; padding: 0 24px; display: grid; grid-template-columns: 1fr auto 1fr; gap: 24px; }
.zap-nav-wrap .zap-brand { justify-self: start; font-size: 19px; font-weight: 750; gap: 8px; white-space: nowrap; }
.zap-nav-wrap .zap-brand-mark { width: 29px; height: 29px; }
.zap-nav-wrap .zap-brand-mark svg { width: 29px; height: 29px; }
.zap-nav-wrap .zap-nav-links { margin: 0; gap: 23px; justify-content: center; }
.zap-nav-wrap .zap-link { font-size: 14px; font-weight: 500; color: #5f6f7c; }
.zap-nav-wrap .zap-link:hover, .zap-nav-wrap .zap-header-trigger[aria-expanded=true] { color: var(--zap-blue); }
.zap-nav-wrap .zap-nav-actions { justify-self: end; gap: 14px; white-space: nowrap; }
.zap-nav-wrap .zap-btn { min-height: 40px; padding: 0 20px; border-radius: 12px; font-size: 14px; font-weight: 650; }
.zap-nav-wrap .zap-btn-ghost { background: transparent; border: 0; padding: 0 5px; font-weight: 500; color: var(--zap-muted); }
.zap-nav-wrap .zap-btn-ghost:hover { color: var(--zap-blue); }
.zap-nav-wrap .zap-btn-primary { box-shadow: none; }
.zap-nav-wrap .zap-header-dropdown { top: 100%; border-radius: 12px; box-shadow: 0 12px 32px rgba(11,29,44,.10); }
@media (max-width: 1200px) { .zap-nav-wrap .zap-nav { gap: 15px; } .zap-nav-wrap .zap-nav-links { gap: 13px; } }
@media (max-width: 1050px) {
  .zap-nav-wrap .zap-nav { display: flex; justify-content: space-between; height: 66px; }
  .zap-nav-wrap .zap-nav-links, .zap-nav-wrap .zap-nav-actions .zap-btn-ghost { display: none; }
  .zap-nav-wrap .zap-menu-btn { display: grid; place-items: center; width: 40px; height: 40px; }
  .zap-nav-wrap .zap-mobile-menu { position: absolute; top: calc(100% + 6px); left: 18px; right: 18px; border: 1px solid var(--zap-line); border-radius: 14px; background: white; padding: 14px; box-shadow: 0 16px 40px #0b1d2c20; max-height: calc(100dvh - 85px); overflow-y: auto; }
  .zap-nav-wrap .zap-mobile-menu .zap-link { display: block; width: 100%; text-align: left; padding: 12px; }
  .zap-nav-wrap .zap-mobile-menu .zap-header-trigger { display: flex; justify-content: space-between; }
  .zap-nav-wrap .zap-mobile-menu .zap-header-dropdown { position: static; width: 100%; min-width: 0; box-shadow: none; margin-bottom: 6px; }
  .zap-nav-wrap .zap-mobile-menu .zap-header-dropdown[data-open=false] { display: none; }
  .zap-nav-wrap .zap-mobile-menu .zap-header-dropdown[data-open=true] { display: block; }
}
@media (max-width: 680px) { .zap-nav-wrap .zap-nav { padding: 0 18px; } .zap-nav-wrap .zap-nav-actions .zap-btn-primary { display: none; } }

`}</style>
        <nav className="zap-nav">
          <button className="zap-brand" onClick={goHome}>
            <span className="zap-brand-mark"><svg width="34" height="34" viewBox="0 0 48 48" aria-hidden="true"><path fill="#315cff" d="M24 1 47 14v20L24 47 1 34V14Z"/><path fill="#fff" d="M10 14h14l12 6-12 6 10 5v7h-9v-7L10 22Z"/></svg></span>
            ZapDocs
          </button>

          <div className="zap-nav-links">
            {renderMenus()}
          </div>

          <div className="zap-nav-actions">
            <button className="zap-btn zap-btn-ghost" onClick={openApp}>Log in</button>
            <button className="zap-btn zap-btn-primary" onClick={openDemo}>Book a Demo</button>
            <button className="zap-menu-btn" onClick={() => { cancelClose(); setActive(null); setMenuOpen((v) => !v); }} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>☰</button>
          </div>

          {menuOpen && (
            <div className="zap-mobile-menu">
              {renderMenus()}
              <button className="zap-link" onClick={openDemo}>Book a Demo →</button>
              <button className="zap-link" onClick={openApp}>Log in</button>
            </div>
          )}
        </nav>
      </header>
  );
}
