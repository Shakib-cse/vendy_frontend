"use client";

import React, { useState, useRef } from "react";
import { ChevronDown, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    issue: "Technical Support",
    details: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDropzoneClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Support ticket submitted:", formData, selectedFile);
  };

  return (
    <div className="bg-[#F3F5F7] min-h-[calc(100vh-64px)] font-sans py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Headline & Info */}
          <div className="lg:col-span-5 space-y-6 lg:pt-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              How Can We Help You{" "}
              <span className="text-blue-600 block sm:inline lg:block">
                Today?
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-md">
              Find answers, browse helpful guides, or get in touch with our support
              team. We're here to help you make the most of Vendy.
            </p>
          </div>

          {/* Right Column - Support Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-100/80">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                    Full Name
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

                {/* Subject */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Unable to Generate Invoice After Payment"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full bg-[#EEF2F6] border-0 rounded-xl h-12 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                  />
                </div>

                {/* Issue Select Dropdown */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                    Issue
                  </label>
                  <div className="relative">
                    <select
                      value={formData.issue}
                      onChange={(e) =>
                        setFormData({ ...formData, issue: e.target.value })
                      }
                      className="w-full appearance-none bg-[#EEF2F6] border-0 rounded-xl h-12 pl-4 pr-10 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer"
                    >
                      <option value="Technical Support">Technical Support</option>
                      <option value="Billing & Subscription">
                        Billing & Subscription
                      </option>
                      <option value="Account Settings">Account Settings</option>
                      <option value="Feature Request">Feature Request</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Details Textarea */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                    Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="I'm experiencing an issue when trying to generate an invoice after receiving a customer payment. The payment is marked as completed, but the invoice remains in draft status and cannot be finalized. I've already tried refreshing the page and logging in again, but the problem persists."
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    className="w-full bg-[#EEF2F6] border-0 rounded-2xl p-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none leading-relaxed transition"
                  />
                </div>

                {/* Upload Screenshot (optional) */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                    Upload Screenshot (optional)
                  </label>
                  <div
                    onClick={handleDropzoneClick}
                    className="border-2 border-dashed border-slate-200/90 hover:border-slate-300 rounded-2xl p-6 text-center bg-[#F8FAFC] hover:bg-slate-100/50 transition cursor-pointer flex flex-col items-center justify-center group"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/png, image/jpeg"
                      className="hidden"
                    />
                    <Upload className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors mb-2" strokeWidth={1.75} />
                    <p className="text-xs text-slate-600">
                      {selectedFile ? (
                        <span className="font-semibold text-blue-600">
                          {selectedFile.name}
                        </span>
                      ) : (
                        "Click or drag images here"
                      )}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      (PNG, JPEG)
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl transition-colors shadow-md shadow-blue-600/20"
                  >
                    Submit
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
