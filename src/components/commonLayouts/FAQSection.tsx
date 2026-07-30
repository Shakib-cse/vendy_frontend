"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Vendy compliant with Angolan tax regulations?",
    answer:
      "Yes. Vendy is designed to support AGT-compliant invoicing, including invoice numbering, tax calculations, QR codes, and SAF-T export requirements for businesses operating in Angola.",
  },
  {
    question: "Can I manage inventory and customer debts in Vendy?",
    answer:
      "Yes. You can manage inventory, stock levels, customer balances, and outstanding debts from one dashboard.",
  },
  {
    question: "Can multiple employees use the same account?",
    answer:
      "Yes. You can create multiple staff accounts with different permissions depending on their role.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Absolutely. Your data is securely stored and protected using industry-standard security practices.",
  },
  {
    question: "Do I need technical knowledge to use Vendy?",
    answer:
      "No. Vendy is designed for business owners with an intuitive interface that's easy to learn.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-[500px_1fr]">
          {/* Left */}
          <div>
            <h2 className="text-5xl font-bold leading-tight text-foreground">
              Frequently Asked
              <br />
              Questions
            </h2>
          </div>

          {/* Right */}
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="space-y-5"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="rounded-3xl border-0 bg-background px-7 py-1 shadow-sm"
              >
                <AccordionTrigger className="py-6 text-left text-[30px] font-semibold text-foreground hover:no-underline [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-muted-foreground">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-6 pr-10 text-lg leading-8 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}