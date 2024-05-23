import Title from "@/components/Title";
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="container px-4 lg:py-8 py-6 mx-auto lg:space-y-9 space-y-7">
      <section className="lg:space-y-8 space-y-6 max-w-screen-md">
        <Title>Blog</Title>
        <p className="text-base">
          Unlocking Possibilities: Navigating the Journey of Life and Learning.
          Welcome to NyaayDarshak Blog – Where Curiosity Meets Insight!
        </p>
      </section>
      <section>{children}</section>
    </main>
  );
}
