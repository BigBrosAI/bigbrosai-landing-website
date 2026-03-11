import type { Metadata } from "next";
import { LegalLayout, LH2, LH3, LP, LUL, LCallout } from "@/components/legal/LegalLayout";
export const metadata: Metadata = { title: "Privacy Policy" };
export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" subtitle="How BigBrosAI collects, uses, and protects your data"
      lastUpdated="January 1, 2025" activePath="/legal/privacy">
      <LP>Bigbros Ai Private Limited ("Company", "we", "us") is committed to protecting your privacy. This Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.</LP>
      <LCallout type="info">By using BigBrosAI, you consent to the practices described in this policy.</LCallout>
      <LH2>1. Information We Collect</LH2>
      <LH3>1.1 Information You Provide</LH3>
      <LUL items={["Account details: name, email, phone, company name, billing address","Payment information processed via PCI-DSS compliant processors","Profile information and notification preferences","Support communications with our team","Business data: contact lists, templates, campaigns you create"]} />
      <LH3>1.2 Automatically Collected</LH3>
      <LUL items={["Log data: IP address, browser type, pages visited, timestamps","Device identifiers and hardware information","Usage data: features used, session duration, click patterns","Cookies and tracking technologies (see Cookie Policy)"]} />
      <LH2>2. How We Use Your Information</LH2>
      <LUL items={["To provide, operate, and improve our services","To process transactions and send billing communications","To send security alerts and support messages","To analyze usage and improve our platform","To send marketing communications (opt-in only, revocable)","To comply with legal obligations and enforce our Terms"]} />
      <LH2>3. Information Sharing</LH2>
      <LP>We do not sell, trade, or rent your personal information. We may share data only with trusted service providers bound by data protection agreements, or when required by law.</LP>
      <LH2>4. Data Retention</LH2>
      <LP>We retain personal information as long as your account is active or as needed to provide services. Request deletion by emailing privacy@bigbrosai.com. We comply within 30 days subject to legal requirements.</LP>
      <LH2>5. Data Security</LH2>
      <LUL items={["256-bit AES encryption for data at rest","TLS 1.3 encryption for all data in transit","Regular security audits and penetration testing","Role-based access controls and 2FA for all admin accounts"]} />
      <LH2>6. Your Rights</LH2>
      <LUL items={["Access — request a copy of your personal data","Rectification — correct inaccurate data","Erasure — request deletion ('right to be forgotten')","Portability — receive data in machine-readable format","Object — opt out of marketing processing"]} />
      <LH2>7. Contact</LH2>
      <LP>Privacy inquiries: privacy@bigbrosai.com | Bigbros Ai Private Limited, India</LP>
    </LegalLayout>
  );
}
