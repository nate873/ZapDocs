
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
  return (
    <span
      className="zap-menu-icon"
      style={{ color }}
      aria-hidden="true"
    >
      <svg
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={iconPaths[name] || iconPaths.file} />
      </svg>
    </span>
  );
}

function UserIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m4 6 4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header({
  onLaunch,
  onPricing,
  onDemo,
  onHome,
} = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(null);

  const root = useRef(null);
  const closeTimer = useRef(null);

  const cancelClose = () => {
    clearTimeout(closeTimer.current);
  };

  const hoverOpen = (name, event) => {
    if (event.pointerType !== "mouse" || menuOpen) return;

    cancelClose();
    setActive(name);
  };

  const hoverClose = (event) => {
    if (event.pointerType !== "mouse" || menuOpen) return;

    cancelClose();

    closeTimer.current = setTimeout(() => {
      setActive(null);
    }, 220);
  };

  useEffect(() => {
    const outside = (e) => {
      if (!root.current?.contains(e.target)) {
        clearTimeout(closeTimer.current);
        setActive(null);
        setMenuOpen(false);
      }
    };

    const escape = (e) => {
      if (e.key === "Escape") {
        clearTimeout(closeTimer.current);
        setActive(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);

    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
      clearTimeout(closeTimer.current);
    };
  }, []);

  const navigate = (path, callback) => {
    cancelClose();
    setActive(null);
    setMenuOpen(false);

    if (typeof callback === "function") {
      callback();
    } else {
      window.location.assign(path);
    }
  };

  const openApp = () => navigate("/app", onLaunch);
  const openPricing = () => navigate("/pricing", onPricing);
  const openDemo = () => navigate("/demo", onDemo);

  const goHome = () => {
    cancelClose();
    setActive(null);
    setMenuOpen(false);

    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/", onHome);
    }
  };

  const scrollTo = (id) => {
    cancelClose();
    setActive(null);
    setMenuOpen(false);

    const target =
      window.location.pathname === "/" &&
      document.getElementById(id);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.assign("/#" + id);
    }
  };

  const menus = [
    [
      "Platform",
      [
        ["Product overview", () => scrollTo("platform")],
        ["Loan workflow", () => scrollTo("workflow")],
      ],
    ],
    [
      "Lenders",
      [
        ["Private lenders", () => navigate("/private-lenders")],
        ["Loan originators", () => navigate("/loan-originators")],
        ["Servicing teams", () => navigate("/servicing-teams")],
        ["Broker workflows", () => navigate("/broker-workflows")],
      ],
    ],
    [
      "How it works",
      [
        ["Loan preparation workflow", () => scrollTo("workflow")],
        ["Book a Demo", openDemo],
      ],
    ],
    [
      "Documents",
      [
        ["Document outputs", () => scrollTo("outputs")],
        ["Document generation", () => scrollTo("workflow")],
      ],
    ],
    [
      "Pricing",
      [
        ["View pricing plans", openPricing],
        ["Book a Demo", openDemo],
      ],
    ],
    [
      "Company",
      [
        ["Book a Demo", openDemo],
        ["Privacy", () => navigate("/privacy")],
        ["Terms", () => navigate("/terms")],
      ],
    ],
  ];

  const renderMenus = () =>
    menus.map(([name, items]) => (
      <div
        className="zap-header-menu"
        key={name}
        onPointerEnter={(e) => hoverOpen(name, e)}
        onPointerLeave={hoverClose}
      >
        <button
          type="button"
          className="zap-link zap-header-trigger"
          aria-expanded={active === name}
          onClick={() => {
            cancelClose();
            setActive((v) => (v === name ? null : name));
          }}
        >
          {name}
          <ChevronIcon />
        </button>

        <div
          className="zap-header-dropdown"
          data-open={active === name}
          inert={active !== name ? true : undefined}
          aria-hidden={active !== name}
        >
          <div className="zap-dropdown-label">{name}</div>

          {items.map(([label, action]) => {
            const [icon, description, color] =
              menuDetails[label] || ["file", "", "#315cff"];

            return (
              <button
                type="button"
                key={label}
                onClick={action}
                className="zap-dropdown-entry"
              >
                <MenuIcon name={icon} color={color} />

                <span className="zap-dropdown-copy">
                  <strong>{label}</strong>
                  <small>{description}</small>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    ));

  return (
    <header className="zap-nav-wrap" ref={root}>
      <style>{`

        /* ==============================
           ZAPDOCS HEADER
        ============================== */

        .zap-nav-wrap {
          --zap-ink: #0e1035;
          --zap-blue: #315cff;
          --zap-green: #3cdb87;
          --zap-green-hover: #2bcb75;
          --zap-line: #e7e9ef;
          --zap-muted: #64748b;

          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          background: #ffffff;
          border-top: 0;
          color: var(--zap-ink);
          font-family: inherit;
          text-align: left;
        }

        .zap-nav-wrap * {
          box-sizing: border-box;
        }

        .zap-nav-wrap button {
          font-family: inherit;
        }

        /* ==============================
           HEADER CONTAINER
        ============================== */

        .zap-nav-wrap .zap-nav {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 42px 22px;
          min-height: 124px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          grid-template-rows: 36px 66px;
          column-gap: 36px;
          align-items: center;
        }

        /* ==============================
           BRAND
        ============================== */

        .zap-nav-wrap .zap-brand {
          grid-column: 1;
          grid-row: 2;
          display: inline-flex;
          align-items: center;
          gap: 11px;
          padding: 0;
          border: 0;
          background: transparent;
          color: var(--zap-ink);
          font-size: 27px;
          font-weight: 800;
          letter-spacing: -1.3px;
          line-height: 1;
          white-space: nowrap;
          cursor: pointer;
        }

        .zap-nav-wrap .zap-brand-mark {
          width: 45px;
          height: 45px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .zap-nav-wrap .zap-brand-mark svg {
          width: 45px;
          height: 45px;
          display: block;
        }

        /* ==============================
           TOP LOGIN
        ============================== */

        .zap-nav-wrap .zap-top-actions {
          grid-column: 3;
          grid-row: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-top: 8px;
          padding-right: 3px;
        }

        .zap-nav-wrap .zap-login-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 0;
          background: transparent;
          padding: 5px 0;
          color: var(--zap-ink);
          font-size: 14px;
          font-weight: 400;
          white-space: nowrap;
          cursor: pointer;
          transition: color .18s ease;
        }

        .zap-nav-wrap .zap-login-link:hover {
          color: var(--zap-blue);
        }

        /* ==============================
           MAIN NAVIGATION
        ============================== */

        .zap-nav-wrap .zap-nav-links {
          grid-column: 2;
          grid-row: 2;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(16px, 2.2vw, 32px);
          min-width: 0;
        }

        .zap-nav-wrap .zap-link {
          border: 0;
          background: transparent;
          padding: 14px 0;
          color: var(--zap-ink);
          font-size: 15px;
          font-weight: 550;
          line-height: 1.4;
          white-space: nowrap;
          cursor: pointer;
          transition: color .18s ease;
        }

        .zap-nav-wrap .zap-link:hover,
        .zap-nav-wrap .zap-header-trigger[aria-expanded="true"] {
          color: var(--zap-blue);
        }

        .zap-nav-wrap .zap-header-menu {
          position: relative;
        }

        .zap-nav-wrap .zap-header-trigger {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .zap-nav-wrap .zap-header-trigger svg {
          flex-shrink: 0;
          transition: transform .24s ease;
        }

        .zap-nav-wrap .zap-header-trigger[aria-expanded="true"] svg {
          transform: rotate(180deg);
        }

        /* ==============================
           DEMO BUTTON
        ============================== */

        .zap-nav-wrap .zap-nav-actions {
          grid-column: 3;
          grid-row: 2;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
        }

        .zap-nav-wrap .zap-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          border: 0;
          border-radius: 999px;
          padding: 0 33px;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.3;
          white-space: nowrap;
          cursor: pointer;
          transition:
            background .18s ease,
            transform .18s ease;
        }

        .zap-nav-wrap .zap-btn-primary {
          min-width: 182px;
          background: var(--zap-green);
          color: var(--zap-ink);
          box-shadow: none;
        }

        .zap-nav-wrap .zap-btn-primary:hover {
          background: var(--zap-green-hover);
          transform: translateY(-1px);
        }

        /* ==============================
           DROPDOWN MENUS
        ============================== */

        .zap-nav-wrap .zap-header-dropdown {
          position: absolute;
          top: calc(100% + 5px);
          left: -18px;
          width: 330px;
          min-width: 220px;
          padding: 18px 12px;
          background: #ffffff;
          border: 1px solid var(--zap-line);
          border-radius: 14px;
          box-shadow: 0 16px 45px rgba(14, 16, 53, .10);
          z-index: 110;

          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(8px);

          transition:
            opacity .2s ease,
            transform .24s cubic-bezier(.2,.75,.25,1),
            visibility .24s;
        }

        .zap-nav-wrap .zap-header-dropdown[data-open="true"] {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
        }

        .zap-nav-wrap .zap-header-menu:nth-last-child(-n+2)
        .zap-header-dropdown {
          left: auto;
          right: -12px;
        }

        .zap-nav-wrap .zap-dropdown-label {
          padding: 0 12px 10px;
          color: var(--zap-muted);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .12em;
        }

        .zap-nav-wrap .zap-dropdown-entry {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          width: 100%;
          padding: 12px;
          border: 0;
          border-radius: 8px;
          background: transparent;
          color: var(--zap-ink);
          text-align: left;
          cursor: pointer;
          transition: background .16s ease;
        }

        .zap-nav-wrap .zap-dropdown-entry:hover {
          background: #f1f5ff;
        }

        .zap-nav-wrap .zap-menu-icon {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          border-radius: 8px;
          background: color-mix(
            in srgb,
            currentColor 9%,
            white
          );
        }

        .zap-nav-wrap .zap-dropdown-copy {
          display: block;
          min-width: 0;
        }

        .zap-nav-wrap .zap-dropdown-copy strong {
          display: block;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
        }

        .zap-nav-wrap .zap-dropdown-copy small {
          display: block;
          margin-top: 4px;
          color: var(--zap-muted);
          font-size: 12px;
          font-weight: 400;
          line-height: 1.5;
        }

        /* ==============================
           MOBILE MENU BUTTON
        ============================== */

        .zap-nav-wrap .zap-menu-btn {
          display: none;
          place-items: center;
          width: 42px;
          height: 42px;
          padding: 0;
          border: 1px solid var(--zap-line);
          border-radius: 9px;
          background: #ffffff;
          color: var(--zap-ink);
          cursor: pointer;
        }

        .zap-nav-wrap .zap-mobile-menu {
          display: none;
        }

        .zap-nav-wrap button:focus-visible {
          outline: 2px solid var(--zap-blue);
          outline-offset: 4px;
        }

        /* ==============================
           SMALLER DESKTOPS
        ============================== */

        @media (max-width: 1250px) {
          .zap-nav-wrap .zap-nav {
            padding-left: 28px;
            padding-right: 28px;
            column-gap: 24px;
          }

          .zap-nav-wrap .zap-nav-links {
            gap: 18px;
          }

          .zap-nav-wrap .zap-link {
            font-size: 14px;
          }

          .zap-nav-wrap .zap-brand {
            font-size: 25px;
          }

          .zap-nav-wrap .zap-btn-primary {
            min-width: 160px;
            padding: 0 25px;
          }
        }

        /* ==============================
           TABLETS AND MOBILE
        ============================== */

        @media (max-width: 1100px) {
          .zap-nav-wrap .zap-nav {
            min-height: 84px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 24px;
            gap: 16px;
          }

          .zap-nav-wrap .zap-brand {
            font-size: 24px;
          }

          .zap-nav-wrap .zap-brand-mark,
          .zap-nav-wrap .zap-brand-mark svg {
            width: 39px;
            height: 39px;
          }

          .zap-nav-wrap .zap-nav-links,
          .zap-nav-wrap .zap-top-actions {
            display: none;
          }

          .zap-nav-wrap .zap-menu-btn {
            display: grid;
          }

          .zap-nav-wrap .zap-btn-primary {
            min-height: 44px;
            min-width: 145px;
            padding: 0 22px;
            font-size: 14px;
          }

          .zap-nav-wrap .zap-mobile-menu {
            display: block;
            position: absolute;
            top: calc(100% + 6px);
            left: 16px;
            right: 16px;
            padding: 14px;
            background: #ffffff;
            border: 1px solid var(--zap-line);
            border-radius: 14px;
            box-shadow: 0 16px 40px rgba(14,16,53,.12);
            max-height: calc(100dvh - 160px);
            overflow-y: auto;
          }

          .zap-nav-wrap .zap-mobile-menu .zap-link {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 13px 10px;
            text-align: left;
            font-size: 15px;
          }

          .zap-nav-wrap .zap-mobile-menu
          .zap-header-dropdown {
            position: static;
            width: 100%;
            min-width: 0;
            margin-bottom: 8px;
            box-shadow: none;
            transform: none;
          }

          .zap-nav-wrap .zap-mobile-menu
          .zap-header-dropdown[data-open="false"] {
            display: none;
          }

          .zap-nav-wrap .zap-mobile-menu
          .zap-header-dropdown[data-open="true"] {
            display: block;
          }

          .zap-nav-wrap .zap-mobile-actions {
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding: 16px 10px 8px;
            margin-top: 8px;
            border-top: 1px solid var(--zap-line);
          }

          .zap-nav-wrap .zap-mobile-actions
          .zap-btn-primary {
            width: 100%;
          }

          .zap-nav-wrap .zap-mobile-actions
          .zap-login-link {
            justify-content: center;
            padding: 10px;
          }
        }

        @media (max-width: 600px) {
          .zap-nav-wrap {
            border-top-width: 0;
          }

          .zap-nav-wrap .zap-nav {
            min-height: 72px;
            padding: 10px 18px;
          }

          .zap-nav-wrap .zap-brand {
            font-size: 23px;
            gap: 8px;
          }

          .zap-nav-wrap .zap-brand-mark,
          .zap-nav-wrap .zap-brand-mark svg {
            width: 36px;
            height: 36px;
          }

          .zap-nav-wrap .zap-nav-actions
          .zap-btn-primary {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zap-nav-wrap * {
            transition: none !important;
          }
        }

      
        /* Beta announcement */
        .zap-nav-wrap .zap-beta-banner {
          width: 100%; min-height: 38px; padding: 8px 18px;
          background: #101031; color: #fff;
          display: flex; align-items: center; justify-content: center;
          flex-wrap: wrap; gap: 10px; text-align: center;
          font-size: 13px; font-weight: 500; line-height: 1.5;
        }
        .zap-nav-wrap .zap-beta-label {
          background: #3cdb87; color: #101031; padding: 2px 9px;
          border-radius: 5px; font-size: 10px; font-weight: 800;
          letter-spacing: .08em;
        }
        .zap-nav-wrap .zap-beta-banner button {
          background: transparent; border: 0; padding: 0;
          color: #3cdb87; font-size: inherit; font-weight: 650;
          cursor: pointer; line-height: inherit;
        }
        .zap-nav-wrap .zap-beta-banner button:hover { text-decoration: underline; }
        .zap-nav-wrap .zap-beta-banner button:focus-visible { outline-color: #3cdb87; }
        @media (max-width: 600px) {
          .zap-nav-wrap .zap-beta-banner { font-size: 11px; gap: 6px; padding: 8px 12px; }
        }

      `}</style>

      <div className="zap-beta-banner">
        <span className="zap-beta-label">BETA</span>
        <span>ZapDocs beta testing is now open!</span>
        <button type="button" onClick={openDemo}>
          Request early access <span aria-hidden="true">→</span>
        </button>
      </div>

      <nav className="zap-nav" aria-label="Main navigation">

        {/* ZapDocs logo */}

        <button
          type="button"
          className="zap-brand"
          onClick={goHome}
          aria-label="ZapDocs home"
        >
          <span className="zap-brand-mark">
            <svg
              width="45"
              height="45"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                fill="#315cff"
                d="M24 1 47 14v20L24 47 1 34V14Z"
              />
              <path
                fill="#fff"
                d="M10 14h14l12 6-12 6 10 5v7h-9v-7L10 22Z"
              />
            </svg>
          </span>

          <span>ZapDocs</span>
        </button>

        {/* Upper-right login */}

        <div className="zap-top-actions">
          <button
            type="button"
            className="zap-login-link"
            onClick={openApp}
          >
            <UserIcon />
            Log in
          </button>
        </div>

        {/* Desktop navigation */}

        <div className="zap-nav-links">
          {renderMenus()}
        </div>

        {/* Main action button */}

        <div className="zap-nav-actions">
          <button
            type="button"
            className="zap-btn zap-btn-primary"
            onClick={openDemo}
          >
            Book a Demo
          </button>

          <button
            type="button"
            className="zap-menu-btn"
            onClick={() => {
              cancelClose();
              setActive(null);
              setMenuOpen((v) => !v);
            }}
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}

        {menuOpen && (
          <div className="zap-mobile-menu">
            {renderMenus()}

            <div className="zap-mobile-actions">
              <button
                type="button"
                className="zap-btn zap-btn-primary"
                onClick={openDemo}
              >
                Book a Demo
              </button>

              <button
                type="button"
                className="zap-login-link"
                onClick={openApp}
              >
                <UserIcon />
                Log in
              </button>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
}
