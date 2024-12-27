import { AmbientColor } from "@/components/ambient-color";
import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { FeaturesGrid } from "@/components/features/features-grid";
import { Testimonials } from "@/components/testimonials";
import { Tools } from "@/components/tools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renocrew Solutions | Innovative Marketing Strategies",
  description:
    "Renocrew Solutions offers cutting-edge marketing strategies to enhance your business growth and online presence.",
  openGraph: {
    images: ["https://renocrew-solutions.com/banner.png"],
  },
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <Tools />
      <Features />
      <FeaturesGrid />

      <div className="pb-40">
        <Testimonials />
      </div>
      <CTA />
    </div>
  );
}
