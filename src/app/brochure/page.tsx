"use client";

import { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowLeft, FileText } from "lucide-react";
import { useState, useEffect } from "react";

export default function BrochurePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      {/* Header with navigation and download button */}
      <div className="bg-white border-b border-gray-200 px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between shadow-sm sticky top-0 z-10">
        <Link
          href="/"
          className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm font-medium">Back</span>
        </Link>

        <h1 className="text-sm sm:text-lg font-bold text-gray-900 hidden xs:block">
          bigbrosai Brochure
        </h1>

        <a
          href="/brochure.pdf"
          download="bigbrosai-brochure.pdf"
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-success-600 text-white rounded-lg hover:bg-success-700 transition-colors text-xs sm:text-sm font-medium"
        >
          <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Download</span>
        </a>
      </div>

      {/* Mobile-optimized view */}
      {isMobile ? (
        <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 text-center space-y-6">
            {/* Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-success-600" />
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                View Our Brochure
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Download the PDF to view it in your preferred PDF reader app for the best mobile experience.
              </p>
            </div>

            {/* Download Button */}
            <a
              href="/brochure.pdf"
              download="bigbrosai-brochure.pdf"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-success-600 text-white rounded-xl hover:bg-success-700 transition-colors text-base font-semibold shadow-md"
            >
              <Download className="w-5 h-5" />
              Download Brochure
            </a>

            {/* Alternative: View in Browser */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-3">
                Or view directly in browser (may not display properly on small screens)
              </p>
              <a
                href="/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                Open in New Tab
              </a>
            </div>

            {/* Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-xs text-blue-800">
                <strong>Tip:</strong> For the best viewing experience, we recommend downloading the PDF and opening it in your device's PDF reader app.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Desktop PDF Viewer */
        <div className="flex-1 w-full overflow-hidden relative">
          <iframe
            src="/brochure.pdf#toolbar=1&navpanes=0&scrollbar=1&view=FitH"
            className="w-full h-full border-0 absolute inset-0"
            title="bigbrosai Brochure"
            style={{ minHeight: "calc(100vh - 60px)" }}
          />
        </div>
      )}

      {/* Footer info for desktop */}
      {!isMobile && (
        <div className="bg-white border-t border-gray-200 px-6 py-3">
          <p className="text-xs text-gray-500 text-center">
            Having trouble viewing? <a href="/brochure.pdf" download="bigbrosai-brochure.pdf" className="text-success-600 hover:text-success-700 font-medium underline">Download the PDF</a> instead.
          </p>
        </div>
      )}
    </div>
  );
}
