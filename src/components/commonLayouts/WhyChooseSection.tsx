import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function WhyChooseSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-xl">
            <span className="text-[18px] font-medium text-muted-foreground">
              Why choose VENDY?
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Built for Modern Angolan Businesses
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Manage invoicing, inventory, customers, and finances from one
              powerful platform designed to simplify operations and support
              business growth.
            </p>

            <Button className="mt-10 h-14 rounded-xl bg-primary px-8 text-base font-semibold hover:bg-primary/90">
              Try it free for 14 days
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-background bg-background shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <Image
                src="/images/commonLayout/second-bn.png"
                alt="Dashboard Preview"
                width={1100}
                height={720}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
