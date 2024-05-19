import Logo from "./Logo";

export default function Footer() {
  return (
    <section className="border-t border-[#ECEFF2]">
      <footer className="container flex flex-col lg:flex-row gap-y-6 px-4 lg:py-[60px] py-7 justify-between">
        <section>
          <Logo />
          <p className="max-w-[200px]">
            2024 ND Legal Foundation. All rights reserved.
          </p>
        </section>
        <section className="space-y-4">
          <p className="tracking-wider text-gray-500 uppercase">GENERAL</p>
          <div className="space-y-1.5">
            <p>Home</p>
            <p>About Us</p>Footer
            <p>Our Services</p>
          </div>
        </section>
        <section className="space-y-4">
          <p className="tracking-wider text-gray-500 uppercase">RESOURCES</p>
          <div className="space-y-1.5">
            <p>Contact Us</p>
            <p>Blog</p>
          </div>
        </section>
        <section className="space-y-4">
          <p className="tracking-wider text-gray-500 uppercase">ORGANIZATION</p>
          <div className="space-y-1.5">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </section>
        <section className="space-y-4">
          <h4 className="tracking-wide text-gray-500 uppercase">SOCIAL</h4>
          <div className="space-y-1.5">
            <p>X/Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Youtube</p>
          </div>
        </section>
      </footer>
    </section>
  );
}
