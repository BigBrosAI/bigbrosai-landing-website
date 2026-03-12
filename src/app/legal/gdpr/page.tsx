import type { Metadata } from "next";
import { LegalLayout, LH2, LH3, LP, LUL, LCallout } from "@/components/legal/LegalLayout";
export const metadata: Metadata = { title: "GDPR Compliance" };
export default function GdprPage() {
  return (
    <LegalLayout title="GDPR Compliance" subtitle="How bigbrosai complies with the General Data Protection Regulation"
      lastUpdated="January 1, 2025" activePath="/legal/gdpr">
      <LP>Bigbros Ai Private Limited is committed to protecting EU/UK personal data in accordance with GDPR (EU) 2016/679 and UK GDPR.</LP>
      <LCallout type="info">Request our Data Processing Agreement (DPA) by emailing dpa@bigbrosai.com. We respond within 2 business days.</LCallout>
      <LH2>1. Data Controller vs. Processor</LH2>
      <LUL items={["You are the Data Controller — you determine the purposes of processing your customers' data","bigbrosai is the Data Processor — we process personal data on your behalf, per your instructions","We sign a Data Processing Agreement (DPA) with all customers processing EU/UK personal data"]} />
      <LH2>2. Lawful Basis for Processing</LH2>
      <LUL items={["Contractual necessity (Article 6(1)(b)): to provide our services","Legitimate interests (Article 6(1)(f)): platform improvements and fraud prevention","Consent (Article 6(1)(a)): marketing, opt-in and revocable","Legal obligation (Article 6(1)(c)): regulatory compliance"]} />
      <LH2>3. Your GDPR Rights</LH2>
      <LP>Contact dpo@bigbrosai.com to exercise any of these rights. We respond within 30 days.</LP>
      <LUL items={["Article 15 — Right of Access","Article 16 — Right to Rectification","Article 17 — Right to Erasure ('right to be forgotten')","Article 18 — Right to Restrict Processing","Article 20 — Right to Data Portability (JSON/CSV)","Article 21 — Right to Object to processing"]} />
      <LH2>4. International Data Transfers</LH2>
      <LUL items={["Standard Contractual Clauses (SCCs) as approved by the European Commission","UK International Data Transfer Agreements (IDTAs) for UK personal data","Transfer Impact Assessments (TIAs) conducted for all significant transfers"]} />
      <LH2>5. Data Breach Notification</LH2>
      <LUL items={["Supervisory authority notified within 72 hours of becoming aware (Article 33)","Affected data subjects notified without undue delay where high risk (Article 34)","Comprehensive breach register maintained per Article 33(5)"]} />
      <LH2>6. Data Protection Officer</LH2>
      <LP>DPO contact: dpo@bigbrosai.com | Bigbros Ai Private Limited, India</LP>
      <LH2>7. Supervisory Authority</LH2>
      <LP>If you believe we have not handled your data correctly, you may lodge a complaint with your local Data Protection Authority. Find yours at: edpb.europa.eu/about-edpb/about-edpb/members_en</LP>
    </LegalLayout>
  );
}
