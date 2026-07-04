"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Effortless & Compliant Invoicing for
              <span className="text-primary"> Angolan Businesses</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
              Create invoices, manage inventory, track customer debts, control
              finances, and grow your business with Angola’s next-generation
              cloud billing platform.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="px-8 py-6 text-base">
                <Link href="/listen">Start Free Trial</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base"
              >
                <Link href="/news">View Demo</Link>
              </Button>
            </div>

            {/* Features */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                14-day free trial
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                No credit card required
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                Cancel anytime
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-150 h-150 overflow-hidden border">
              <Image
                src="/images/commonLayout/banner.png"
                alt="Hero Image"
                fill
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
