"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="px-6 py-16">
      <div className="relative mx-auto container overflow-hidden rounded-3xl bg-foreground px-8 py-20 text-center lg:px-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 opacity-[0.05]">
            <svg
              viewBox="0 0 400 400"
              className="h-full w-full fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="110" y="20" width="60" height="60" rx="4" />
              <rect
                x="180"
                y="90"
                width="60"
                height="160"
                rx="4"
                transform="rotate(45 210 170)"
              />
              <circle cx="330" cy="80" r="42" />
              <circle cx="350" cy="200" r="34" />
              <circle cx="310" cy="330" r="34" />
              <circle cx="180" cy="340" r="55" />
              <path d="M295 180 L350 200" stroke="white" strokeWidth="18" />
              <path d="M295 295 L310 330" stroke="white" strokeWidth="18" />
              <path d="M235 250 L180 340" stroke="white" strokeWidth="18" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Ready to run <span className="text-primary">your business</span>
            <br />
            the modern way?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400">
            Join thousands of Angolan businesses already using Vendy. 14-day
            free trial. No credit card required.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-xl bg-primary px-8 text-background hover:bg-primary/90"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-xl border-muted-foreground bg-transparent px-8 text-background hover:bg-background hover:text-foreground"
            >
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
