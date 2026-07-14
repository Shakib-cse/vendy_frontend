import {
  FileText,
  Boxes,
  Users,
  Truck,
  CreditCard,
  Receipt,
  Download,
  QrCode,
  BarChart3,
  UserCog,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AGT Certified Invoicing",
    description:
      "Issue legal invoices with sequential numbering, digital signature and QR codes.",
  },
  {
    icon: Boxes,
    title: "Inventory Management",
    description:
      "Track stock across multiple warehouses with real-time alerts and movements.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description:
      "Complete CRM with profiles, debt tracking, statements and purchase history.",
  },
  {
    icon: Truck,
    title: "Supplier Management",
    description:
      "Centralize suppliers, purchases and outstanding payments in one place.",
  },
  {
    icon: CreditCard,
    title: "Debt & Payment Tracking",
    description:
      "Monitor receivables, send reminders and reconcile payments instantly.",
  },
  {
    icon: Receipt,
    title: "Receipts & Credit Notes",
    description:
      "Generate receipts, issue credit notes and track every cancellation.",
  },
  {
    icon: Download,
    title: "SAF-T Export",
    description:
      "Export AGT-compliant SAF-T files in one click for monthly reporting.",
  },
  {
    icon: QrCode,
    title: "QR Code Invoices",
    description:
      "Every document carries a verifiable QR code and digital fingerprint.",
  },
  {
    icon: BarChart3,
    title: "Business Reports",
    description:
      "Beautiful, exportable analytics across sales, tax, customers and stock.",
  },
  {
    icon: UserCog,
    title: "Multi-User Access",
    description:
      "Granular roles and permissions for accountants, cashiers and managers.",
  },
  {
    icon: Cloud,
    title: "Automatic Cloud Backups",
    description: "Your data backed up every hour with 99.99% uptime guarantee.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security",
    description:
      "End-to-end encryption, SOC 2, and full audit trails on every action.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Everything your business needs.
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-600">
            Nothing it doesn&apos;t.
          </h2>
        </div>

        {/* Grid */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="
    p-6 min-h-[180px]
    border-slate-200
    [&:not(:nth-child(3n))]:border-r
    [&:not(:nth-last-child(-n+3))]:border-b
  "
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                    <Icon className="h-5 w-5 text-slate-600" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
