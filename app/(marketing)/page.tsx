import { AmbientColor } from "@/components/ambient-color";
import { CTA } from "@/components/cta";
import { FAQs } from "@/components/faqs";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { Tools } from "@/components/tools";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <Hero />
      <Features />
      <Tools />
      <Testimonials />
      {/* <div className="py-20 sm:py-40">
        {/* <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconReceiptFilled className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
        <Heading className="pt-4">Simple pricing</Heading>
        <Subheading>
          Simple pricing for startups, small businesses, medium scale businesses
          and enterprises.
        </Subheading>
        <PricingGrid /> */} 
        <FAQs />
      {/* </div> */}
      <CTA />
    </div>
  );
}
