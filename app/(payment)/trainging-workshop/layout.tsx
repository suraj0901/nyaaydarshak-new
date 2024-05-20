import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <main className="container p-4 grid lg:grid-cols-2 space-y-8 lg:space-y-0">
      <section>
        <div className="space-y-6 lg:pt-32 pt-4 max-w-xl mx-auto">
          <h1 className="lg:text-4xl text-[22px] tracking-wider lg:leading-[46px]  leading-[30px] font-semibold max-w-2xl">
            Host a Legal Training Workshop For Your Team
          </h1>
          <p className="text-base">
            Interested in hosting a workshop for your team or organization? Fill
            out the form below, and we&apos;ll get back to you with all the
            necessary details to kickstart your journey towards creating a
            respectful and inclusive workplace through legal awareness training.
          </p>
        </div>
      </section>
      <section className="">{children}</section>
    </main>
  );
}
