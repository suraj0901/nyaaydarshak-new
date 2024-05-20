import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <main className="container p-4 grid  space-y-8 lg:space-0 lg:grid-cols-2">
      <section>
        <div className="space-y-6 lg:pt-32 pt-4 max-w-xl mx-auto">
          <h1 className="lg:text-4xl text-[22px] tracking-wider lg:leading-[46px]  leading-[30px] font-semibold max-w-2xl">
            Purposeful Consultations- Where Empowerment Begins!
          </h1>
          <p className="text-base">
            We understand that you might have reasons for not being able to pay
            the booking fee. Please know that we&apos;re here to support you
            through this.
          </p>
        </div>
      </section>
      <section className="">{children}</section>
    </main>
  );
}
