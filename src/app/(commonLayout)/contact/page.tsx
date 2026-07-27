"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+88",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  return (
    <div className="bg-[#F3F5F7] min-h-[calc(100vh-64px)] font-sans py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Information */}
          <div className="lg:col-span-5 space-y-8 lg:pt-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Contact our team
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed max-w-md">
                Got any questions about this product or scalling on our platform?
                We're here to help.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-6 pt-2">
              {/* Location */}
              <div className="flex items-start gap-4 text-slate-900">
                <MapPin className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-sm sm:text-base font-bold leading-snug">
                  1055 Arthur ave Elk Groot, 67.
                  <br />
                  New Palmas South Carolina.
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 text-slate-900">
                <Phone className="w-5 h-5 text-slate-800 shrink-0" strokeWidth={2} />
                <span className="text-sm sm:text-base font-bold">
                  +1 234 678 9108 99
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 text-slate-900">
                <Mail className="w-5 h-5 text-slate-800 shrink-0" strokeWidth={2} />
                <a
                  href="mailto:Contact@vendy.com"
                  className="text-sm sm:text-base font-bold hover:text-blue-600 transition-colors"
                >
                  Contact@vendy.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-100/80">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="João Manuel Silva"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full bg-[#EEF2F6] border-0 rounded-xl h-12 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[#EEF2F6] border-0 rounded-xl h-12 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-3">
                    <div className="relative">
                      <select
                        value={formData.countryCode}
                        onChange={(e) =>
                          setFormData({ ...formData, countryCode: e.target.value })
                        }
                        className="appearance-none bg-[#EEF2F6] border-0 rounded-xl h-12 pl-4 pr-9 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer"
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
                      placeholder="017806561565"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, phoneNumber: e.target.value })
                      }
                      className="flex-1 bg-[#EEF2F6] border-0 rounded-xl h-12 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-[#EEF2F6] border-0 rounded-2xl p-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none leading-relaxed transition"
                  />
                </div>

                {/* Send Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl transition-colors shadow-md shadow-blue-600/20"
                  >
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
