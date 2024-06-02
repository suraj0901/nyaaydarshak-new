import Title from "@/components/Title";

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 lg:pb-16 pb-7">
      <Title className="lg:py-8 py-6">Privacy Policy</Title>
      <p className="max-w-4xl">
        NyaayDarshak is the business name under which ND Legal Foundation, a
        Section 8 Company incorporated under the Companies Act, 2013 operates.
        NyaayDarshak has its registered office at Lalman Niwas, Ground Floor,
        Vidya Sagar Pally, Khalpara, Siliguri, 734001, India. This Privacy
        Policy is designed to help you understand how we collect, use, disclose,
        and safeguard your personal information. By accessing or using our
        website, you agree to the terms outlined in this policy.
      </p>

      <section className="mt-9 space-y-6 max-w-4xl">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-wide">
            1. Information We Collect
          </h3>
          <div className="sapce-y-4 ml-8">
            <div className="space-y-1">
              <h4 className="text-lg tracking-wide font-semibold">
                a. Personal Information:
              </h4>
              <p>
                We may collect personal information, including but not limited
                to, names, email addresses, phone numbers, and postal addresses,
                when voluntarily submitted by our website visitors through
                contact forms or other means.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-lg tracking-wide font-semibold">
                b. Non-Personal Information:
              </h4>
              <p>
                We may also collect non-personal information, such as browser
                type, IP address, and other technical information, to improve
                the functionality of our website and enhance your experience.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-wide">
            2. How We Use Your Information
          </h3>
          <div className="ml-8 space-y-1">
            <h4 className="text-lg tracking-wide font-semibold">
              We may use the collected information for the following purposes:
            </h4>
            <p>To communicate with you and respond to your inquiries.</p>
            <p>
              To provide information about our NGO&apos;s activities, events,
              and initiatives.
            </p>
            <p>
              To improve and customize our website content and user experience.
            </p>
            <p>To comply with legal obligations and regulations.</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-wide">
            3. Information Sharing
          </h3>
          <div className="ml-8 space-y-1">
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with trusted third-party service
              providers who assist us in operating our website and conducting
              our activities, provided that they agree to keep this information
              confidential.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-wide">4. Cookies</h3>
          <div className="ml-8 space-y-1">
            <p>
              Our website may use cookies to enhance your experience. You can
              set your browser to refuse cookies or alert you when cookies are
              being sent. However, some parts of our website may not function
              properly without cookies.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-wide">5. Security</h3>
          <div className="ml-8 space-y-1">
            <p>
              We take reasonable steps to protect your personal information from
              unauthorized access, disclosure, alteration, and destruction.
              However, please be aware that no method of transmission over the
              internet or electronic storage is 100% secure.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-wide">
            6. Changes to This Privacy Policy
          </h3>
          <div className="ml-8 space-y-1">
            <p>
              We reserve the right to update or change this privacy policy at
              any time. We will notify you of any changes by posting the updated
              policy on our website with the effective date.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-wide">
            7. Contact Us
          </h3>
          <div className="ml-8 space-y-1">
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at
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
            Privacy Policy.
          </p>
        </div>
      </section>
    </main>
  );
}
