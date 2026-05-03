import { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Brochure | bigbrosai",
  description: "View bigbrosai product brochure",
};

export default function BrochurePage() {
  return (
    <div className="w-full h-screen flex flex-col bg-gray-50">
      {/* Header with navigation and download button */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        <h1 className="text-lg font-bold text-gray-900 hidden sm:block">
          bigbrosai Brochure
        </h1>

        <a
          href="/brochure.pdf"
          download="bigbrosai-brochure.pdf"
          className="flex items-center gap-2 px-4 py-2 bg-success-600 text-white rounded-lg hover:bg-success-700 transition-colors text-sm font-medium"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Download</span>
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 w-full overflow-hidden">
        <iframe
          src="/brochure.pdf#toolbar=1&navpanes=0&scrollbar=1"
          className="w-full h-full border-0"
          title="bigbrosai Brochure"
        />
      </div>

      {/* Mobile fallback message */}
      <div className="sm:hidden bg-blue-50 border-t border-blue-200 px-4 py-3">
        <p className="text-xs text-blue-800 text-center">
          For the best viewing experience, please download the PDF or view on a larger screen.
        </p>
      </div>
    </div>
  );
}
