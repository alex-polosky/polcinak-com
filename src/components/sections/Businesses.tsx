import { businesses } from "@/content/site";
import { Section, SectionHeader } from "@/components/ui/Section";
import { BusinessCard } from "./BusinessCard";

export function Businesses() {
  return (
    <Section id="businesses">
      <SectionHeader
        number="01"
        eyebrow="Primary Operating Units"
        title="Our Businesses"
        intro="Core visitor destinations across custom engineering, digital fabrication, and immersive entertainment."
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {businesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </Section>
  );
}
