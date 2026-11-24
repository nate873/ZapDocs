import Terms from "./Terms";
import PrivacyPolicy from "./PrivacyPolicy";
import Accessibility from "./Accessibility";
const pages = { "/terms": Terms, "/privacy": PrivacyPolicy, "/accessibility": Accessibility };
export function legalRoute() { const path = window.location.pathname.replace(/\/$/, ""); return Object.hasOwn(pages, path) ? path : null; }
export default function ZapDocsLegal({ path, onNavigate }) { const Page = pages[path]; return Page ? <Page onNavigate={onNavigate} /> : null; }
