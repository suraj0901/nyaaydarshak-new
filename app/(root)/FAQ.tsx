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
        <h1 className="lg:text-4xl  text-[22px] tracking-wider lg:leading-[46px]  leading-[30px] font-semibold max-w-2xl">
          FAQs
        </h1>
        <Accordion type="multiple">
          {FAQ_CONFIG.map((item, index) => (
            <AccordionItem
              className="border-[#F1F4F7] bg-[#F6F9FC] shadow p-4 lg:px-8 lg:py-4 rounded-lg my-2"
              key={index}
              value={index + ""}
            >
              <AccordionTrigger className="font-semibold text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
