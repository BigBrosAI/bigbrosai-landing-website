import type { Metadata } from "next";
import { LegalLayout, LH2, LH3, LP, LUL, LCallout } from "@/components/legal/LegalLayout";
export const metadata: Metadata = { title: "Terms of Service" };
export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" subtitle="Rules and conditions governing your use of bigbrosai"
      lastUpdated="January 1, 2025" activePath="/legal/terms">
      <LP>By accessing or using bigbrosai, you agree to be bound by these Terms of Service. These Terms constitute a legally binding agreement between you and Bigbros Ai Private Limited ("Company").</LP>
      <LH2>1. Acceptance</LH2>
      <LP>By creating an account, you represent that you are at least 18, have authority to bind your organisation, and will comply with all applicable laws.</LP>
      <LH2>2. Services</LH2>
      <LP>bigbrosai provides a cloud-based communication platform enabling businesses to:</LP>
      <LUL items={["Send and manage WhatsApp Business messages via official Meta APIs","Create and deploy automated chatbot flows","Manage contacts and run segmented campaigns","Analyse messaging performance in real time","Integrate with CRMs, payment gateways and other tools"]} />
      <LH2>3. Account Security</LH2>
      <LUL items={["Provide accurate registration information","Maintain confidentiality of your credentials","Notify us immediately of any unauthorised access","Be responsible for all activity under your account"]} />
      <LH2>4. Acceptable Use</LH2>
      <LCallout type="warning">Violations may result in immediate account suspension without refund.</LCallout>
      <LP>You must NOT:</LP>
      <LUL items={["Send spam or messages to users who have not opted in","Transmit illegal, harassing, defamatory, or fraudulent content","Violate WhatsApp Business Policy or Meta Commerce Policy","Impersonate another person or organisation","Attempt to gain unauthorised access to our systems"]} />
      <LH2>5. WhatsApp Compliance</LH2>
      <LUL items={["Comply with WhatsApp Business Policy at all times","Only contact users who have explicitly opted in","Honor opt-out requests immediately","Use only approved Message Templates for outbound messaging"]} />
      <LH2>6. Fees & Payment</LH2>
      <LUL items={["Subscription fees are billed monthly or annually as selected","WhatsApp conversation charges are billed separately per Meta's rates","Failed payments may result in suspension after 7 days' notice","Price changes communicated 30 days in advance"]} />
      <LH2>7. Limitation of Liability</LH2>
      <LP>To the maximum extent permitted by law, Bigbros Ai Private Limited's total liability shall not exceed the fees you paid in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.</LP>
      <LH2>8. Governing Law</LH2>
      <LP>These Terms are governed by the laws of India. Disputes shall be resolved through binding arbitration under the Arbitration and Conciliation Act, 1996.</LP>
      <LH2>9. Contact</LH2>
      <LP>Legal inquiries: legal@bigbrosai.com | Bigbros Ai Private Limited, India</LP>
    </LegalLayout>
  );
}
