import Title from "@/components/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQ_CONFIG from "@/config/faq.config";

export default function FAQ() {
  return (
    <section id="faqs" className="lg:py-[60px] py-7">
      <div className="container px-4  space-y-5 lg:space-y-10">
        <Title>FAQs</Title>
        <Accordion type="multiple">
          {FAQ_CONFIG.map((item, index) => (
            <AccordionItem
              className="border-[#F1F4F7] border bg-[#F6F9FC] shadow-[0px_1px_1px_0px_rgba(216,_220,_229,_0.05)_inset] px-4 py-1 lg:px-8 lg:py-4 rounded-lg my-2"
              key={index}
              value={index + ""}
            >
              <AccordionTrigger className="text-left hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base font-normal text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
