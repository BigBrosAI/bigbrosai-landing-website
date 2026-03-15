"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-lg font-semibold tracking-widest text-slate-400 uppercase mb-3">
        404 Error
      </p>

      <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
        Page Not Found
      </h1>

      <p className="max-w-md text-slate-500 text-lg leading-relaxed mb-8">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>

      <Link href="/">
        <Button variant="primary" size="md">
          Go Back Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
