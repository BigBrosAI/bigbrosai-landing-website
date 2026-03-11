import type { Metadata } from "next";
import { LegalLayout, LH2, LP, LUL, LCallout } from "@/components/legal/LegalLayout";
export const metadata: Metadata = { title: "Refund Policy" };
export default function RefundPage() {
  return (
    <LegalLayout title="Refund Policy" subtitle="Our commitment to fair and transparent billing"
      lastUpdated="January 1, 2025" activePath="/legal/refund">
      <LP>At BigBrosAI, we stand behind our platform. This policy outlines when and how refunds are processed.</LP>
      <LCallout type="info">We offer a hassle-free money-back guarantee on all plans. Contact support@bigbrosai.com within the guarantee period.</LCallout>
      <LH2>1. Money-Back Guarantee</LH2>
      <LUL items={["Monthly plans: 7-day money-back guarantee from purchase date","Annual plans: 14-day money-back guarantee from purchase date","No questions asked — contact support within the guarantee period"]} />
      <LH2>2. Eligible Refunds</LH2>
      <LUL items={["Requests within the guarantee period","Accidental duplicate charges","Significant platform outages exceeding 24 hours in a billing period"]} />
      <LH2>3. Non-Refundable</LH2>
      <LUL items={["WhatsApp conversation charges (billed by Meta, non-recoverable)","Subscription fees after the guarantee period","Accounts terminated due to policy violations"]} />
      <LH2>4. How to Request</LH2>
      <LUL items={["Email billing@bigbrosai.com with subject: 'Refund Request — [Account Email]'","Include your invoice number, reason, and bank/UPI details","Our team responds within 2 business days","Approved refunds processed within 7–10 business days"]} />
      <LH2>5. Contact</LH2>
      <LP>Billing queries: billing@bigbrosai.com | Bigbros Ai Private Limited</LP>
    </LegalLayout>
  );
}
