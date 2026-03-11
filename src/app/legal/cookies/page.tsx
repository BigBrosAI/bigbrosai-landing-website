import type { Metadata } from "next";
import { LegalLayout, LH2, LH3, LP, LUL } from "@/components/legal/LegalLayout";
export const metadata: Metadata = { title: "Cookie Policy" };
export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" subtitle="How we use cookies and similar tracking technologies"
      lastUpdated="January 1, 2025" activePath="/legal/cookies">
      <LP>This Cookie Policy explains how Bigbros Ai Private Limited uses cookies when you visit our website and platform.</LP>
      <LH2>1. What Are Cookies?</LH2>
      <LP>Cookies are small text files stored on your device when you visit a website. They help remember your preferences, login status, and behaviour to provide a better experience.</LP>
      <LH2>2. Types of Cookies We Use</LH2>
      <LH3>2.1 Essential Cookies</LH3>
      <LUL items={["Session management and authentication tokens","Security cookies to prevent CSRF attacks","User preference settings (language, timezone)"]} />
      <LH3>2.2 Analytics Cookies</LH3>
      <LUL items={["Google Analytics (anonymised IP, aggregated behaviour)","Mixpanel (feature usage and journey tracking)"]} />
      <LH3>2.3 Marketing Cookies</LH3>
      <LUL items={["Google Ads (conversion tracking)","Meta Pixel (Facebook & Instagram ad attribution)","LinkedIn Insight Tag (B2B ad performance)"]} />
      <LH2>3. Managing Cookies</LH2>
      <LUL items={["Our cookie consent banner — customise on first visit","Browser settings — block or delete cookies via Privacy settings","Google Analytics Opt-out Add-on (tools.google.com/dlpage/gaoptout)"]} />
      <LH2>4. Contact</LH2>
      <LP>Cookie questions: privacy@bigbrosai.com | Bigbros Ai Private Limited</LP>
    </LegalLayout>
  );
}
