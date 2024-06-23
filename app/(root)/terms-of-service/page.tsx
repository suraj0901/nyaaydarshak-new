import Title from "@/components/Title";

export default function TermsOfService() {
  return (
    <main className="container mx-auto px-4 lg:pb-16 pb-7">
      <Title className="lg:py-8 py-6">Terms of Service</Title>
      <p className="max-w-4xl">
        NyaayDarshak is the business name under which ND Legal Foundation, a
        Section 8 Company incorporated under the Companies Act, 2013 operates.
        NyaayDarshak has its registered office at Lalman Niwas, Ground Floor,
        Vidya Sagar Pally, Khalpara, Siliguri, 734001, India. Our Terms of
        Service outline how we collect, use, disclose, and safeguard your
        personal information. By accessing or using our website, you agree to
        these terms.
      </p>

      <section className="mt-9 space-y-6 max-w-4xl">
        <div className="space-y-4">
          <h3 className="lg:text-2xl text-lg font-semibold tracking-wide">
            1. Acceptance of Terms
          </h3>
          <div className="ml-8 space-y-1">
            <p>
              By accessing or using our website, you agree to be bound by these
              Terms of Service and all applicable laws and regulations. If you
              do not agree with any part of these terms, you may not use our
              website.{" "}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="lg:text-2xl text-lg font-semibold tracking-wide">
            2. Use of the Website
          </h3>
          <ul className="ml-8 space-y-1 list-disc">
            <p>
              You agree to use our website for lawful purposes only and in a
              manner consistent with all applicable laws and regulations. You
              also agree not to:
            </p>
            <li>
              Engage in any conduct that may disrupt or interfere with the
              normal operation of the website.
            </li>
            <li>
              Attempt to gain unauthorized access to any part of the website or
              its related systems or networks.
            </li>
            <li>
              Use the website to transmit any content that is unlawful, harmful,
              threatening, abusive, defamatory, or otherwise objectionable.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="lg:text-2xl text-lg font-semibold tracking-wide">
            3. Intellectual Property
          </h3>
          <div className="ml-8 space-y-1">
            <p>
              All content on the website, including text, graphics, logos,
              images, and software, is the property of NyaayDarshak or its
              content suppliers and is protected by intellectual property laws.
              You may not reproduce, modify, distribute, or otherwise use any
              content without our express written consent.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="lg:text-2xl text-lg font-semibold tracking-wide">
            4. Privacy
          </h3>
          <div className="ml-8 space-y-1">
            <p>
              Your use of our website is also governed by our Privacy Policy. By
              using our website, you consent to the collection and use of
              information as outlined in the Privacy Policy.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="lg:text-2xl text-lg font-semibold tracking-wide">
            5. Links to Third-Party Websites
          </h3>
          <div className="ml-8 space-y-1">
            <p>
              Our website may contain links to third-party websites. These links
              are provided for your convenience only. We have no control over
              the content or availability of third-party websites and do not
              endorse or make any representations about them. Your use of
              third-party websites is at your own risk.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="lg:text-2xl text-lg font-semibold tracking-wide">
            6. Non-Refundable Payments
          </h3>
          <div className="ml-8 space-y-1">
            <p>
              All payments made towards our services are final and
              non-refundable. By making a payment, you acknowledge and agree
              that no refunds will be issued for any reason, including but not
              limited to dissatisfaction with the service, change of mind, or
              any other circumstances.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="lg:text-2xl text-lg font-semibold tracking-wide">
            7. Limitation of Liability
          </h3>
          <ul className="ml-8 space-y-1 list-disc">
            <li>
              To the extent permitted by law, NyaayDarshak shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages, or any loss of profits or revenues, whether incurred
              directly or indirectly, or any loss of data, use, goodwill, or
              other intangible losses resulting from:
            </li>
            <li>Your use or inability to use the website.</li>
            <li>
              Any unauthorized access to or use of our servers or any personal
              information stored therein.
            </li>
            <li>
              Any interruptions or cessation of transmission to or from the
              website.
            </li>
            <li>
              Any bugs, viruses, trojan horses, or the like that may be
              transmitted to or through the website.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="lg:text-2xl text-lg font-semibold tracking-wide">
            8. Changes to Terms of Service
          </h3>
          <div className="ml-8 space-y-1">
            <p>
              We reserve the right to update or change these Terms of Service at
              any time without prior notice. Any changes will be effective
              immediately upon posting the updated terms on the website.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="lg:text-2xl text-lg font-semibold tracking-wide">
            9. Contact Us
          </h3>
          <div className="ml-8 space-y-1">
            <p>
              If you have any questions or concerns about this{" "}
              <b>Terms of Service</b>, please contact us at
            </p>
            <a
              className="hover:underline underline-offset-4 text-blue-500"
              href="mailto:contact.us.nyaaydarshak@gmail.com"
            >
              contact.us.nyaaydarshak@gmail.com
            </a>
          </div>
        </div>
        <div className="ml-8">
          <p>
            By using our website, you agree to the terms outlined in this
            <b>Terms of Service</b>.
          </p>
        </div>
      </section>
    </main>
  );
}
