import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    title: "VENDY Lite",
    description: "For single shop owners",
    price: "8,500",
    suffix: "/month",
    button: "Start Free Trial",
    featured: false,
    features: [
      "1 user",
      "10 invoices/month",
      "1 warehouse",
      "AGT certified",
      "QR + Digital signature",
      "Email support",
    ],
  },
  {
    title: "VENDY Start",
    description: "Growing businesses with a small team",
    price: "18,500",
    suffix: "/month",
    button: "Start Free Trial",
    featured: false,
    features: [
      "3 users",
      "100 invoices/month",
      "2 warehouses",
      "Inventory + CRM",
      "SAF-T export",
      "Priority email support",
    ],
  },
  {
    title: "VENDY Pro",
    description: "Established companies that need more power",
    price: "42,000",
    suffix: "/month",
    button: "Start Free Trial",
    featured: true,
    badge: "Most Popular",
    features: [
      "10 users",
      "Unlimited invoices",
      "5 warehouses",
      "Multi-store + API access",
      "Advanced reports",
      "Phone & chat support",
      "Integrations",
    ],
  },
  {
    title: "VENDY Business",
    description: "Enterprises, chains and franchises",
    price: "Custom",
    suffix: "",
    button: "Contact sales",
    featured: false,
    features: [
      "1 user",
      "Up to 50 invoices/month",
      "1 warehouse",
      "AGT certified",
      "QR + Digital signature",
      "Email support",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Pricing
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
            Simple, transparent plans
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={cn(
                "relative rounded-3xl border bg-secondary p-6 transition-all",
                plan.featured
                  ? "border-4 border-primary shadow-xl"
                  : "border-border",
              )}
            >
              {plan.featured && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-background">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-3xl font-semibold text-foreground">
                {plan.title}
              </h3>

              <p className="mt-2 min-h-[52px] text-lg text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-6 flex items-end">
                {plan.price !== "Custom" ? (
                  <>
                    <span className="mr-1 text-lg text-muted-foreground">
                      KZ
                    </span>

                    <span className="text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>

                    <span className="mb-1 ml-1 text-lg text-muted-foreground">
                      {plan.suffix}
                    </span>
                  </>
                ) : (
                  <span className="text-5xl font-bold text-foreground">
                    Custom
                  </span>
                )}
              </div>

              <Button
                className={cn(
                  "mt-8 h-14 w-full rounded-xl text-lg",
                  plan.featured
                    ? "bg-primary hover:bg-primary/90"
                    : "border border-border bg-background text-foreground/70 hover:bg-border",
                )}
                variant={plan.featured ? "default" : "outline"}
              >
                {plan.button}
              </Button>

              <div className="my-8 border-t" />

              <ul className="space-y-5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2
                      className="h-5 w-5 text-emerald-500"
                      strokeWidth={2.5}
                    />
                    <span className="text-base text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
