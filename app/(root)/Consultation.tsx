import Title from "@/components/Title";
import CONSULTATION_CONFIG from "@/config/consultation.config";
import { ReactNode } from "react";

export default function Consultation({ children }: { children?: ReactNode }) {
  return (
    <section
      id="consultation"
      className="container px-4 lg:py-[60px] py-7 space-y-10"
    >
      <div className="space-y-4">
        <Title>
          Empower Yourself - <br className="hidden lg:block" /> 1:1 Consultation
          with NyaayDarshak
        </Title>
        <p className="tracking-wide">
          Navigating the legal system can be overwhelming, especially for
          survivors of gender-based violence. Our team of experienced legal
          professionals provides personalized consultations and comprehensive
          litigation support to guide survivors through every step of their
          legal journey. Whether you&apos;re seeking advice, representation, or
          assistance with paperwork, we&apos;re here to provide the support you
          need to assert your rights and seek justice.
        </p>
      </div>
      {children}
      <div className="grid lg:grid-cols-2 gap-y-12">
        {CONSULTATION_CONFIG.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-start lg:items-stretch lg:flex-row gap-6 max-w-lg"
          >
            <div className="p-2 rounded-lg shadow-[0px_2px_16px_0px_rgba(13,_12,_11,_0.05)] lg:py-8 lg:px-9">
              {item.id}
            </div>
            <div>
              <div className="flex font-semibold items-center gap-x-2">
                {item.icon}
                {item.label}
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
