"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/site/section-heading";
import { FAQS } from "@/lib/faq-data";

export function LunarFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="mx-auto max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Questions, answered"
        title="Frequently asked questions"
        intro="The most common questions about tonight's Moon, the phase cycle, and how the moon phase emoji is chosen. If your question isn't here, send it through the Contact page and we'll consider adding it."
      />

      <Accordion
        type="single"
        collapsible
        className="mt-10 w-full"
        defaultValue="faq-0"
      >
        {FAQS.map((faq, i) => (
          <AccordionItem
            key={faq.q}
            value={`faq-${i}`}
            className="border-amber-300/15"
          >
            <AccordionTrigger className="text-left font-display text-lg font-medium text-[#f5f0e8] hover:text-[#f5c542] hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-[#c4b9d6] sm:text-base">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
