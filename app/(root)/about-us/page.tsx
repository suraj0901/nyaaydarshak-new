import Title from "@/components/Title";

export default function AboutUs() {
  return (
    <main className="container px-4 mx-auto">
      <Title className="lg:py-8 py-6">About Us</Title>
      <section className="space-y-6 lg:mb-8 mb-7 max-w-3xl">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Mission</h3>
          <p>
            Our mission is simple yet powerful— bridging the justice gap by
            offering affordable solutions to victims/survivors of gender-based
            violence. We extend our services pan-India, emphasizing the need to
            go beyond traditional avenues by incorporating alternate approaches
            such as mediation for a holistic and empowering experience.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Vision</h3>
          <p>
            At NyaayDarshak, we transcend the role of mere advocates; we are
            agents of change committed to challenging societal norms and
            fostering systemic change. Our initiatives aim to create a ripple
            effect that extends beyond individual cases, contributing to a
            society where justice is not a privilege but a fundamental right.
          </p>
        </div>
      </section>
      <section className="space-y-6 mb-8">
        <div className="space-y-4 max-w-3xl">
          <h3 className="text-2xl font-semibold">Get to know us</h3>
          <p>
            Experience NyaayDarshak&apos;s journey firsthand. Discover our
            mission-driven approach, see our vision in action, and learn how
            we&apos;re making a difference in bridging the justice gap. Join us
            as we strive to build a society where justice is not a privilege but
            a fundamental right.
          </p>
        </div>
        <video controls className="w-full aspect-video rounded-sm">
          <source
            src="https://youtu.be/QmsmcuMepGU?si=7QbzkJHPZQTsyGR3"
            type="video/mp4"
          />
        </video>
      </section>
    </main>
  );
}
