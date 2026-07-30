"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset requested for:", email);
    router.push("/forgot-password/verify");
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center px-4 py-12 font-sans">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight hover:opacity-90 transition-opacity inline-block"
        >
          VENDY
        </Link>

        {/* Heading & Subtitle */}
        <h1 className="text-2xl font-bold text-slate-900 mt-4 mb-1">
          Enter Your Email
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto mb-8">
          We will send a verification email to your address.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {/* Email Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white rounded-xl border-0 h-12 px-4 shadow-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
            />
          </div>

          {/* Submit Button (Send) */}
          <div className="pt-1">
            <Button
              type="submit"
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-md shadow-blue-600/20"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
