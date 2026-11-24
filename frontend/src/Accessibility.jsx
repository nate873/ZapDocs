import LegalLayout from './LegalLayout';
const OPERATOR = 'ZapDocs';
const policy = { title: 'Accessibility', sections: [
    ['Our commitment', 'ZapDocs aims to provide a website and loan document workspace that people with disabilities can use. We view accessibility as an ongoing part of product development.'],
    ['Accessibility standards', 'Our design target is the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA. This is a goal rather than a certification or representation that every page, workflow or generated document currently conforms.'],
    ['Website and document accessibility', 'We aim to improve keyboard navigation, visible focus indicators, meaningful labels, heading structure, text alternatives, color contrast and responsive layouts. Generated Word and PDF documents may have accessibility limitations, including limitations introduced by templates or document conversion.'],
    ['Feedback and assistance', 'If you encounter a barrier, please tell us the page or feature affected, the difficulty you experienced and your preferred method of contact. If possible, include the browser and assistive technology used. Please do not include confidential borrower information or credentials. We will review requests and work toward a practical alternative or correction.'],
    ['Continuous improvement', 'We welcome feedback as we evaluate and improve accessibility across the website, loan workspace and document workflows.'] ]};
export default function Accessibility({ onNavigate }) { return <LegalLayout policy={policy} path="/accessibility" onNavigate={onNavigate} />; }
