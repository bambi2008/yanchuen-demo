import { ContactPage } from "@/components/site-pages/contact-page";
import { metadataFor } from "@/lib/site";

export const metadata = metadataFor("Contact Yan Chuen | Hong Kong", "Email or call Yan Chuen in Hong Kong and prepare a custom keypad or rubber-component enquiry.", "/contact", "en");
export default function Page(){ return <ContactPage lang="en"/>; }
