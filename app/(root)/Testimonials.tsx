import BLOCKQUOTES from "@/config/testimonial.config";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F6F9FC] lg:py-[60px] py-7">
      <div className="container px-4 space-y-10">
        <div className="space-y-4">
          <h1 className="lg:text-4xl text-[22px] tracking-wider lg:leading-[46px]  leading-[30px] font-semibold max-w-2xl">
            What our clients have to say about us
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-y-10">
          {BLOCKQUOTES.map((item) => (
            <Blockquote key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface BlockquoteProp {
  quote: string;
  name: string;
}

function Blockquote({ quote, name }: BlockquoteProp) {
  return (
    <div className="flex flex-col justify-between border-l-4 border-amber-400 p-6">
      <p>{quote}</p>
      <i className="text-sm mt-4">{name}</i>
    </div>
  );
}
