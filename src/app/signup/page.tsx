"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+88",
    phone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Account registration submitted:", formData);
    router.push("/verify");
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center px-4 py-12 font-sans">
      <div className="w-full max-w-lg mx-auto">
        {/* Brand Logo & Heading */}
        <div className="text-center mb-6">
          <Link
            href="/"
            className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight hover:opacity-90 transition-opacity"
          >
            VENDY
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 mt-4 mb-1">
            Create your account
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Join us in just a few simple steps.
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                First Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full bg-white rounded-xl border-0 h-12 px-4 shadow-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                Last Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full bg-white rounded-xl border-0 h-12 px-4 shadow-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-white rounded-xl border-0 h-12 px-4 shadow-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Phone
            </label>
            <div className="flex gap-3">
              <div className="relative">
                <select
                  value={formData.countryCode}
                  onChange={(e) =>
                    setFormData({ ...formData, countryCode: e.target.value })
                  }
                  className="appearance-none bg-white rounded-xl border-0 h-12 pl-4 pr-9 shadow-sm text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer"
                >
                  <option value="+88">+88</option>
                  <option value="+1">+1</option>
                  <option value="+244">+244</option>
                  <option value="+351">+351</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <input
                type="tel"
                required
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="flex-1 bg-white rounded-xl border-0 h-12 px-4 shadow-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full bg-white rounded-xl border-0 h-12 pl-4 pr-11 shadow-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition p-1"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button (Next) */}
          <div className="pt-3">
            <Button
              type="submit"
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-md shadow-blue-600/20"
            >
              Next
            </Button>
          </div>

          {/* Login Redirect */}
          <p className="text-center text-xs text-slate-600 pt-4">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
