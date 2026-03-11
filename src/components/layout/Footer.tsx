import Link from "next/link";
import Image from "next/image";
import {
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { FOOTER_COLS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-slate-500">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Bigbros Ai"
              width={140}
              height={36}
              className="h-8 w-auto mb-5"
            />

            <p className="text-sm leading-relaxed text-slate-400 max-w-[260px] mb-6">
              The unified communication platform for WhatsApp, Email, SMS, RCS
              & Instagram. Trusted by 50,000+ businesses globally.
            </p>

            <div className="flex gap-2">
              {[
                { Icon: MessageCircle, label: "WhatsApp" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Instagram, label: "Instagram" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-slate-400 hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.12em] mb-4">
                {col.title}
              </h4>

              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-brand-700 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Bigbros Ai Private Limited. All rights
            reserved.
          </p>

          <div className="flex gap-5">
            {[
              { label: "Privacy", href: "/legal/privacy" },
              { label: "Terms", href: "/legal/terms" },
              { label: "Cookies", href: "/legal/cookies" },
              { label: "GDPR", href: "/legal/gdpr" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-brand-700 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}