import Title from "@/components/Title";
import COLLABORATORS_LOGOS from "@/config/collaborators-logos";
import Image from "next/image";

export default function Collaborations() {
  return (
    <div id="collaborations" className="bg-[#F6F9FC] lg:py-[60px] py-7">
      <div className="container px-4 space-y-10">
        <Title>
          Educating Through Consultations & <br className="hidden lg:block" />{" "}
          Collaborative Workshops Across India
        </Title>
        <div className="grid grid-cols-2 lg:flex gap-8 items-center justify-between">
          {COLLABORATORS_LOGOS.map((logo) => (
            <Image
              className="shrink-0 object-contain h-[70px] w-fit"
              key={logo}
              src={logo}
              width={200}
              height={200}
              alt={logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
