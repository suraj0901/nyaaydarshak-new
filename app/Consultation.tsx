import CONSULTATION_CONFIG from "@/config/consultation.config";

export default function Consultation() {
  return (
    <section
      id="consultation"
      className="container px-4 lg:py-[60px] py-7 space-y-10"
    >
      <div className="space-y-4">
        <h1 className="lg:text-4xl text-[22px] tracking-wider lg:leading-[46px]  leading-[30px] font-semibold max-w-2xl">
          Empower Yourself - 1:1 Consultation with NyaayDarshak
        </h1>
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
      <div className="grid lg:grid-cols-2 gap-y-12">
        {CONSULTATION_CONFIG.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-start lg:items-stretch lg:flex-row gap-6 max-w-lg"
          >
            <div className="p-2 rounded-lg shadow-md lg:py-8 lg:px-9">
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
