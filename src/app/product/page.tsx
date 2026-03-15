import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import Link from "next/link";
import { MessageSquare, Mail, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Products | bigbrosai",
  description: "Explore bigbrosai's suite of communication APIs including WhatsApp and Transactional Email.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white pt-16 font-sans antialiased text-slate-900">
      <Navbar />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-display font-black text-5xl md:text-6xl tracking-tight mb-6 text-gray-900">
            Our Communication <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Products</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Everything you need to engage customers, automate support, and deliver critical notifications reliably at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* WhatsApp Card */}
          <Link href="/" className="group flex flex-col items-start bg-slate-50 border border-slate-200 p-10 rounded-3xl hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5 transition-all outline-none focus-visible:ring-4 focus-visible:ring-green-500/20">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-8 border border-green-200">
              <MessageSquare size={32} className="text-green-600" />
            </div>
            
            <h2 className="font-display font-black text-3xl mb-4 text-gray-900 group-hover:text-green-700 transition-colors">WhatsApp Business API</h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8 flex-1">
              Automate customer support, send promotional broadcasts, and build interactive AI-powered Chatbots directly on WhatsApp.
            </p>
            
            <div className="flex items-center gap-2 text-green-700 font-bold text-sm tracking-wide group-hover:gap-3 transition-all">
              Explore WhatsApp API <ArrowRight size={16} />
            </div>
          </Link>

          {/* Email Card */}
          <Link href="/product/email" className="group flex flex-col items-start bg-slate-50 border border-slate-200 p-10 rounded-3xl hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-8 border border-blue-200">
              <Mail size={32} className="text-blue-600" />
            </div>
            
            <h2 className="font-display font-black text-3xl mb-4 text-gray-900 group-hover:text-blue-700 transition-colors">Transactional Email API</h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8 flex-1">
              Send verified OTPs, invoices, and password resets with 99.99% guaranteed uptime and sub-second delivery latency.
            </p>
            
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm tracking-wide group-hover:gap-3 transition-all">
              Explore Email API <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
