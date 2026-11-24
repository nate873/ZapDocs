import ProductOverview from "./ProductOverview";
import LoanWorkflow from "./LoanWorkflow";
import DocumentGeneration from "./DocumentGeneration";
import TeamWorkspace from "./TeamWorkspace";
import PrivateLenders from "./PrivateLenders";
import LoanOriginators from "./LoanOriginators";
import ServicingTeams from "./ServicingTeams";
import BrokerWorkflows from "./BrokerWorkflows";
import HowItWorks from "./HowItWorks";
import DocumentOutputs from "./DocumentOutputs";
import ProductGuide from "./ProductGuide";
import GettingStarted from "./GettingStarted";
import About from "./About";
import Contact from "./Contact";
import Security from "./Security";
import Updates from "./Updates";
import HelpCenter from "./HelpCenter";
import ContactSupport from "./ContactSupport";
const pages = {
"/platform": ProductOverview,
"/loan-workflow": LoanWorkflow,
"/document-generation": DocumentGeneration,
"/team-workspace": TeamWorkspace,
"/private-lenders": PrivateLenders,
"/loan-originators": LoanOriginators,
"/servicing-teams": ServicingTeams,
"/broker-workflows": BrokerWorkflows,
"/how-it-works": HowItWorks,
"/document-outputs": DocumentOutputs,
"/product-guide": ProductGuide,
"/getting-started": GettingStarted,
"/about": About,
"/contact": Contact,
"/security": Security,
"/updates": Updates,
"/help-center": HelpCenter,
"/contact-support": ContactSupport
};
export function siteRoute(){const p=window.location.pathname.replace(/\/$/, "");return Object.hasOwn(pages,p)?p:null;}
export default function SitePages({path}){const Page=pages[path];return Page?<Page key={path}/>:null;}
