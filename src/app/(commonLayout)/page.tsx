import Banner from "@/components/commonLayouts/Banner";
import CTASection from "@/components/commonLayouts/cta-section";
import FAQSection from "@/components/commonLayouts/FAQSection";
import FeaturesGrid from "@/components/commonLayouts/FeaturesGrid";
import PricingSection from "@/components/commonLayouts/PricingSection";
import ReviewsSection from "@/components/commonLayouts/ReviewsSection";
import WhyChooseSection from "@/components/commonLayouts/WhyChooseSection";

export default function Home() {
  return (
    <main>
      <Banner />
      <FeaturesGrid />
      <WhyChooseSection />
      <PricingSection />
      <FAQSection />
      <ReviewsSection />
      <CTASection />
    </main>
  );
}
