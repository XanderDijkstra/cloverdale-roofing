import Link from "next/link";
import { site } from "@/lib/site";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import JsonLd from "@/components/json-ld";
import styles from "../homepage2.module.css";
import section from "@/components/page-sections.module.css";

export const metadata = createPageMetadata({title:"Privacy & Website Inquiries",description:"How the roofing inquiry form works, where your details go, and how to contact us about information you have shared.",path:"/privacy"});

export default function PrivacyPage() {
  return <main id="main-content" tabIndex={-1} className={`${styles.sectionShell} ${section.section}`}><JsonLd data={breadcrumbSchema([{name:"Home",path:"/"},{name:"Privacy",path:"/privacy"}])} /><nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Privacy</span></nav><article className={section.article}>
    <h1>Privacy & website inquiries.</h1><p>This notice explains the inquiry tools currently available on this website.</p>
    <h2>What happens in the form</h2><p>The form asks for your roofing need, name, email, phone number, and property address. These details stay in the page while you prepare your request. Selecting “Open email draft” passes the request to your email application; it does not submit the form to a website database.</p><p>The draft is addressed to <a href={`mailto:${site.email}`}>{site.email}</a>. You review and send it yourself. The copy-request option puts the same request on your device clipboard so you can paste it into an email.</p>
    <h2>Information included in a request</h2><p>The draft includes the information you entered, the selected service and area, and the page where you started. If the current link includes campaign labels, those labels may also appear to help identify how the inquiry arrived. Do not include payment details, identification documents, or other sensitive information in a roofing inquiry.</p>
    <h2>Email and website providers</h2><p>Once you send an email, your email provider and the recipient’s email service process that message. This website is hosted on Vercel, whose infrastructure processes technical request information to deliver and secure the site. See <a href="https://vercel.com/legal/privacy-policy">Vercel’s privacy policy</a> for its practices.</p>
    <h2>Cookies and measurement</h2><p>The site does not currently load advertising pixels, session recording, or a third-party analytics script. The inquiry form does not store your contact details in browser cookies or local storage.</p>
    <h2>Questions about information you shared</h2><p>Contact <a href={`mailto:${site.email}`}>{site.email}</a> with questions about a request you sent, including requests to access, correct, or delete your information. Please identify the request without sending additional sensitive documents.</p>
  </article></main>;
}
