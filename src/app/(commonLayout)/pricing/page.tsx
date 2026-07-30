import React from "react";
import { Check, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Top cards data
const mainPlans = [
  {
    title: "VENDY Freelance",
    subtitle: "For single shop owners",
    price: "3,623",
    period: "/month",
    isPopular: false,
    buttonText: "Start Free Trial",
    features: [
      "200 invoices/month",
      "Automatic Tax Calculation",
      "Legally Valid Documents",
      "1 User",
      "Online Business Management",
      "Free Support",
      "Automatic Updates",
    ],
  },
  {
    title: "VENDY Start",
    subtitle: "Growing businesses with a small team",
    price: "7,823",
    period: "/month",
    isPopular: false,
    buttonText: "Start Free Trial",
    features: [
      "Unlimited invoices",
      "Automatic Tax Calculation",
      "Legally Valid Documents",
      "Electronic Invoicing (AGT Compliant)",
      "VAT & Tax Reports",
      "Invoice Customization",
      "Multi-Currency Invoicing",
      "POS Access",
      "PDF & SAF-T Export",
      "Mobile App (Coming Soon)",
    ],
  },
  {
    title: "VENDY Pro",
    subtitle: "Established companies that need more power",
    price: "12,688",
    period: "/month",
    isPopular: true,
    badge: "Most Popular",
    buttonText: "Start Free Trial",
    features: [
      "Unlimited invoices",
      "Automatic Tax Calculation",
      "Legally Valid Documents",
      "Electronic Invoicing (AGT Compliant)",
      "VAT & Tax Reports",
      "Inventory Management",
      "Warehouse Management",
      "Sales Reports & Analytics",
      "Multiple POS Terminals",
      "Customer & Supplier Management",
    ],
  },
  {
    title: "VENDY Business",
    subtitle: "Enterprises, chains and franchises",
    price: "28,923",
    period: "/month",
    isPopular: false,
    buttonText: "Start Free Trial",
    features: [
      "Unlimited invoices",
      "Automatic Tax Calculation",
      "Legally Valid Documents",
      "Electronic Invoicing (AGT Compliant)",
      "VAT & Tax Reports",
      "Multiple Companies",
      "API Integrations",
      "Automatic Billing",
      "Multiple Warehouses",
      "Priority Support",
    ],
  },
];

// Feature Comparison Table Data
interface FeatureRow {
  name: string;
  freelance: string;
  start: string;
  pro: string;
  business: string;
}

const comparisonFeatures: FeatureRow[] = [
  { name: "Number of documents month", freelance: "200", start: "Unlimited", pro: "Unlimited", business: "Unlimited" },
  { name: "Automatic Tax Calculation", freelance: "Yes", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Legally valid documents", freelance: "Yes", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Document Customization", freelance: "(No logo)", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Electronic Invoicing (AGT compliant)", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Payment Per Referral", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "Company Setup and Settings", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Managing your subscription", freelance: "Yes", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Invoicing in foreign currency (Euro or USD)", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "Managing Your Online Business", freelance: "Yes", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Vendy POS Access Number", freelance: "No", start: "01", pro: "02", business: "05" },
  { name: "Exchanges and Returns", freelance: "Yes", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Various Invoice Templates", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Additional user (2000kz /month*)", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Free Support", freelance: "Yes", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Free Updates (Technical & Legal)", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Security and Backups", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "File issuance and export", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "SAF-T-PT (Monthly and annual)", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Multi-account login", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Customizable settings per account", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "Access to Mobile Apps", freelance: "Coming soon", start: "Coming soon", pro: "Coming soon", business: "Coming soon" },
  { name: "Integration with e-Commerce platforms", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "API connections", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "POS (Point of Sale) Modules", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Bead print", freelance: "Yes", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Various Points of Sale", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "ATM References", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Manage access permissions", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Several companies on account", freelance: "No", start: "No", pro: "No", business: "Yes (3 companies)" },
  { name: "Qualified digital signature", freelance: "Yes", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Undo, edit, or draft documents", freelance: "Yes", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Configurable discounts, taxes, and withholdings", freelance: "Yes", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Sending documents by email", freelance: "Yes", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Sales documents", freelance: "Yes", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Purchase documents", freelance: "Yes", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Article and category management", freelance: "Yes", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Export of PDF article listings and catalogs", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Individual stock control", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Control and administration of stocks by warehouse", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "Complete customer management", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Checking accounts, statements, and customer balances", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Current accounts, statements, and balances by vendor", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "Seller management", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "Control of commissions and sales by seller", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "Imports of items, customers and suppliers using CSV/XLS and SAF-T files", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "Checking accounts and customer balances", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "Outstanding and control of customer debts", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "Sales Statement & Analysis", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Simplified VAT maps and withholdings on sales", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "Vendor balances and checking accounts", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Control of payments and debts to suppliers", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "Profit margin per item or household", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "Complete management of orders and purchases from suppliers", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "Converting Orders to Sales Documents and Vendor Credit", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "Creating automatic billing routines (automatic billing)", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "Automatic and free new feature updates", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Free Support via Phone, Email, Live Chat, Team Viewer", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Multiple Warehouses", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
  { name: "Additional warehouse or branch 3500 month per each", freelance: "No", start: "Yes", pro: "Yes", business: "Yes" },
  { name: "Tax Payable Email Alert", freelance: "No", start: "No", pro: "Yes", business: "Yes" },
];

// Bottom summary cards data
const bottomPlans = [
  {
    title: "VENDY Freelance",
    subtitle: "For single shop owners",
    price: "3,623",
    isPopular: false,
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const,
  },
  {
    title: "VENDY Start",
    subtitle: "Growing businesses",
    price: "7,823",
    isPopular: false,
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const,
  },
  {
    title: "VENDY Pro",
    subtitle: "Established companies that need more power",
    price: "12,688",
    isPopular: true,
    badge: "Most Popular",
    buttonText: "Start Free Trial",
    buttonVariant: "primary" as const,
  },
  {
    title: "VENDY Business",
    subtitle: "Enterprises",
    price: "28,923",
    isPopular: false,
    buttonText: "Contact sales",
    buttonVariant: "outline" as const,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans pb-24">
      {/* Hero Section */}
      <section className="pt-16 pb-14 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Simple pricing for{" "}
          <span className="text-blue-600">every stage of growth</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
          Precision POS systems designed to evolve with your business. No hidden
          fees, no complexity. Just technical excellence in commerce.
        </p>
      </section>

      {/* Top 4 Pricing Tier Cards */}
      <section className="container mx-auto px-4 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {mainPlans.map((plan) => (
            <div
              key={plan.title}
              className={cn(
                "relative bg-white rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 border",
                plan.isPopular
                  ? "border-blue-600 shadow-xl ring-2 ring-blue-600/20"
                  : "border-slate-200/80 shadow-sm hover:shadow-md"
              )}
            >
              {/* Badge if Popular */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {plan.title}
                </h3>
                <p className="text-xs text-slate-500 min-h-[32px] mt-1 leading-snug">
                  {plan.subtitle}
                </p>

                {/* Price */}
                <div className="mt-5 mb-6 flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-slate-500">
                    KZ
                  </span>
                  <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {plan.period}
                  </span>
                </div>

                {/* CTA Button */}
                <Button
                  className={cn(
                    "w-full h-11 rounded-xl text-sm font-medium transition-colors",
                    plan.isPopular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
                      : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
                  )}
                  variant={plan.isPopular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>

                {/* Divider */}
                <div className="my-6 border-t border-slate-100" />

                {/* Features list */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Side-by-side Feature Comparison Table Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
          Compare features side-by-side
        </h2>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-900">
                  <th className="py-4 px-6 font-bold w-2/5">Functions</th>
                  <th className="py-4 px-4 font-bold text-center w-3/20">
                    Vendy Freelance
                  </th>
                  <th className="py-4 px-4 font-bold text-center w-3/20">
                    Vendy Start
                  </th>
                  <th className="py-4 px-4 font-bold text-center w-3/20">
                    Vendy Pro
                  </th>
                  <th className="py-4 px-4 font-bold text-center w-3/20">
                    Vendy Business
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {comparisonFeatures.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-3.5 px-6 font-medium text-slate-800">
                      {row.name}
                    </td>
                    <td className="py-3.5 px-4 text-center font-normal text-slate-600">
                      {row.freelance}
                    </td>
                    <td className="py-3.5 px-4 text-center font-normal text-slate-600">
                      {row.start}
                    </td>
                    <td className="py-3.5 px-4 text-center font-normal text-slate-600">
                      {row.pro}
                    </td>
                    <td className="py-3.5 px-4 text-center font-normal text-slate-600">
                      {row.business}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom Summary Section ("Simple, transparent plans") */}
      <section className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
          Simple, transparent plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {bottomPlans.map((plan) => (
            <div
              key={plan.title}
              className={cn(
                "relative bg-white rounded-2xl p-6 flex flex-col justify-between border transition-all duration-200",
                plan.isPopular
                  ? "border-blue-600 shadow-lg ring-2 ring-blue-600/20"
                  : "border-slate-200/80 shadow-sm"
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-semibold px-3 py-0.5 rounded-full shadow-sm">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {plan.title}
                </h3>
                <p className="text-xs text-slate-500 min-h-[32px] mt-1 leading-snug">
                  {plan.subtitle}
                </p>

                <div className="mt-4 mb-5 flex items-baseline gap-1">
                  <span className="text-xs font-semibold text-slate-500">
                    KZ
                  </span>
                  <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-[10px] font-medium text-slate-500">
                    /month
                  </span>
                </div>
              </div>

              <Button
                className={cn(
                  "w-full h-10 rounded-xl text-xs font-medium transition-colors",
                  plan.isPopular
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                    : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
                )}
                variant={plan.isPopular ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
