"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordVerifyPage() {
  const router = useRouter();
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    // Only accept numbers
    if (value && !/^\d+$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    // Auto-focus next input box if a digit was entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (/^\d{1,6}$/.test(pastedData)) {
      const digits = pastedData.split("").slice(0, 6);
      const newCode = [...code];
      digits.forEach((digit, idx) => {
        newCode[idx] = digit;
      });
      setCode(newCode);
      const nextFocusIndex = Math.min(digits.length, 5);
      inputRefs.current[nextFocusIndex]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Forgot password verification code submitted:", code.join(""));
    router.push("/forgot-password/new-password");
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
          Enter Verification Code
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto mb-8">
          Please enter the verification code sent to your email.
        </p>

        {/* Verification Code Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 6 OTP Digit Input Boxes */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                className="w-11 h-12 sm:w-12 sm:h-12 text-center text-lg font-bold bg-white rounded-xl shadow-sm border-0 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
              />
            ))}
          </div>

          {/* Submit Button */}
          <div>
            <Button
              type="submit"
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-md shadow-blue-600/20"
            >
              Submit
            </Button>
          </div>

          {/* Resend It Link */}
          <div>
            <button
              type="button"
              onClick={() => console.log("Resend code requested")}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline transition"
            >
              Resend It
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
