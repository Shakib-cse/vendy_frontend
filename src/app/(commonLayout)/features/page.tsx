import FeaturesGrid from "@/components/commonLayouts/FeaturesGrid";
import CTASection from "@/components/commonLayouts/cta-section";
import React from "react";

export default function FeaturesPage() {
  return (
    <main className="py-8">
      <FeaturesGrid />
      <CTASection />
    </main>
  );
}
