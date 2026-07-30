"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="px-6 py-16">
      <div className="relative mx-auto container overflow-hidden rounded-3xl bg-foreground px-8 py-20 text-center lg:px-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 top-1/2 h-130 w-130 -translate-y-1/2 opacity-20">
            <Image
              src="/images/commonLayout/shadow.png"
              alt="Background Pattern"
              fill
              sizes="520px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-background md:text-5xl">
            Ready to run <span className="text-primary">your business</span>
            <br />
            the modern way?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
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
