"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Archive, Reply, Forward, Trash2, MoreHorizontal
} from "lucide-react";

type TemplateItem = {
  subject: string;
  sender: string;
  date: string;
  preview: string;
  body: React.ReactNode;
};

const BRAND = "#0284c7"; // sky-600

const EMAIL_TEMPLATES: TemplateItem[] = [
  {
    subject: "Your bigbrosai Verification Code",
    sender: "bigbrosai Auth",
    date: "Today, 9:41 AM",
    preview: "482917 is your verification code for bigbrosai...",
    body: (
      <div className="bg-slate-50 p-6 rounded-xl font-sans text-sm text-slate-700">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100 p-8 text-center">
          <h1 className="text-xl font-bold text-slate-900 mb-2">Verification Code</h1>
          <p className="mb-6 text-slate-500">Please use the verification code below to sign in.</p>

          <div className="bg-slate-50 font-mono text-3xl font-bold tracking-[0.2em] p-4 rounded-lg text-slate-800 mb-6 border border-slate-100">
            482917
          </div>

          <p className="text-xs text-slate-400 leading-relaxed mb-6">
            If you didn't request this, you can safely ignore this email. This code expires in 10 minutes.
          </p>

          <p className="text-xs font-semibold text-slate-500">The bigbrosai Team</p>
        </div>
      </div>
    )
  },
  {
    subject: "Payment Receipt: Invoice #INV-2023-10",
    sender: "bigbrosai Billing",
    date: "Yesterday, 2:15 PM",
    preview: "Thank you for your payment of ₹8299.00...",
    body: (
      <div className="font-sans text-sm text-slate-700 bg-white p-6 rounded-lg border border-gray-200 shadow-sm max-w-md mx-auto">
        <div className="flex justify-between items-start mb-8 border-b border-gray-100 pb-4">
          <div>
            <h1 className="text-lg font-bold text-slate-900">Receipt</h1>
            <p className="text-xs text-slate-500">#INV-2023-10</p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-black text-slate-900">₹8299.00</h2>
            <p className="text-xs text-green-600 font-semibold mt-1">Paid on Oct 1</p>
          </div>
        </div>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-slate-600">
            <span>Pro Plan (Monthly)</span>
            <span className="font-semibold text-slate-900">₹8299.00</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Email Overage (10k API calls)</span>
            <span className="font-semibold text-slate-900">₹0.00</span>
          </div>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex justify-between items-center mb-6">
          <span className="text-slate-500 text-xs">Billed to VISA ending in 4242</span>
          <button className="text-blue-600 font-semibold text-xs hover:underline">Download PDF</button>
        </div>
        <p className="text-[10px] text-slate-400 text-center">bigbrosai Inc. • 123 Tech Park, Bangalore</p>
      </div>
    )
  },
  {
    subject: "Welcome to bigbrosai API",
    sender: "bigbrosai API Team",
    date: "Sep 28, 9:00 AM",
    preview: "Your API keys are ready. Here's how to send your first email...",
    body: (
      <div className="font-sans text-sm text-slate-700">
        <div className="mb-6 max-w-md">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">You're ready to build 🛠️</h1>
          <p className="mb-4">Hi Developer,</p>
          <p className="mb-6 leading-relaxed">
            Your workspace is set up and your API keys are active. You can start sending transactional emails right away.
          </p>

          <div className="bg-slate-900 rounded-lg p-4 mb-6 shadow-inner">
            <p className="text-slate-400 text-xs mb-2 font-mono">// Send your first email</p>
            <p className="text-green-400 font-mono text-xs break-all">
              curl -X POST https://api.bigbrosai.com/v1/emails \<br />
              -H "Authorization: Bearer YOUR_API_KEY" \<br />
              -d '&#123;"to": "user@example.com", "subject": "Hello World"&#125;'
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md text-sm hover:bg-blue-700 transition">
              View Documentation
            </button>
            <button className="bg-slate-100 text-slate-700 font-semibold py-2 px-4 rounded-md text-sm hover:bg-slate-200 transition">
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    )
  }
];

export function EmailMockup() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => advance(1), 5000);
    return () => clearInterval(iv);
  }, [current]);

  function advance(dir: 1 | -1) {
    setVisible(false);
    setTimeout(() => {
      setCurrent((c) => (c + dir + EMAIL_TEMPLATES.length) % EMAIL_TEMPLATES.length);
      setVisible(true);
    }, 300);
  }

  function jumpTo(i: number) {
    if (i === current) return;
    setVisible(false);
    setTimeout(() => { setCurrent(i); setVisible(true); }, 300);
  }

  const template = EMAIL_TEMPLATES[current];

  return (
    <div className="flex flex-col items-center gap-5 select-none w-full max-w-2xl">

      <div className="relative w-full shadow-2xl rounded-xl overflow-hidden border border-slate-200 bg-white">

        {/* macOS Window Title Bar */}
        <div className="bg-slate-100 h-10 flex items-center px-4 border-b border-slate-200">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="mx-auto flex items-center bg-white px-3 py-1 rounded shadow-sm border border-slate-200 text-xs text-slate-500 gap-2 w-1/2 justify-center">
            <LockIcon /> mail.google.com
          </div>
        </div>

        {/* Browser / Email Client Area */}
        <div className="flex h-[420px] bg-white">

          {/* Email View (Full Width) */}
          <div className="flex-1 flex flex-col min-w-0">

            {/* Email Action Bar */}
            <div className="flex p-3 gap-2 border-b border-slate-100">
              <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition"><Archive size={16} /></button>
              <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition"><Trash2 size={16} /></button>
              <div className="w-px h-6 bg-slate-200 mx-1 self-center"></div>
              <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition"><Reply size={16} /></button>
              <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition"><Forward size={16} /></button>
              <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition ml-auto"><MoreHorizontal size={16} /></button>
            </div>

            {/* Animated Email Content */}
            <div className="flex-1 overflow-auto p-6 relative">
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              >
                <h2 className="text-xl font-bold text-slate-900 mb-4">{template.subject}</h2>
                <div className="flex items-center gap-3 mb-6">
                  <Image src="/BBAI_logo.png" alt="Brand" width={70} height={70} />

                  <div>
                    <div className="flex items-center gap-1 font-semibold text-sm text-slate-900">
                      {template.sender}

                      <Image
                        src="/whatspp-verification-badge.svg"
                        alt="Verified"
                        width={15}
                        height={15}
                        className="inline-block"
                      />

                      <span className="text-xs text-slate-500 font-normal">
                        &lt;hello@domain.com&gt;
                      </span>
                    </div>

                    <div className="text-xs text-slate-500">
                      to me • {template.date}
                    </div>
                  </div>
                </div>
                {/* The actual body */}
                <div className="mt-4">
                  {template.body}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Progress indicators for mobile or underneath */}
      <div className="flex gap-1.5 items-center mt-2">
        {EMAIL_TEMPLATES.map((_, i) => (
          <button
            key={i}
            onClick={() => jumpTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: current === i ? 20 : 7,
              height: 7,
              background: current === i ? BRAND : "#d1d5db",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function LockIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );
}
