import Title from "@/components/Title";
import { Card, CardHeader } from "@/components/ui/card";
import EXPERIENCE_CONFIG from "@/config/experience.config";
import { cn } from "@/lib/utils";
import { Siren } from "lucide-react";
import Image from "next/image";

export default function Experience() {
  // hsla(67, 50%, 86%, 0.05)
  // hsla(8, 50%, 86%, 0.05)
  return (
    <section id="experiences" className="lg:py-[60px] py-7">
      <div className="container px-4 space-y-6 lg:space-y-11">
        <Title>
          Do you relate to <br className="hidden lg:block" /> these real-life
          problems?
        </Title>
        <div className="flex flex-col lg:flex-row lg:gap-8 gap-4 mx-auto w-fit lg:pt-8">
          <div className="flex flex-col justify-between gap-5 lg:gap-20">
            <ExperienceCard h={67} className={"lg:rotate-12 lg:translate-x-10"}>
              <p>{EXPERIENCE_CONFIG[0].label}</p>
            </ExperienceCard>
            <ExperienceCard h={8}>
              <p className="max-w-[150px]">{EXPERIENCE_CONFIG[1].label}</p>
            </ExperienceCard>
            <ExperienceCard
              h={223}
              className={"lg:-rotate-12 lg:translate-x-10"}
            >
              <p>{EXPERIENCE_CONFIG[2].label}</p>
            </ExperienceCard>
          </div>
          <div className="grid place-items-center">
            <Image
              src="/Experience.png"
              width={400}
              height={400}
              alt="experience"
              className="w-full bg-primary pt-11 rounded-full"
            />
          </div>
          <div className="flex flex-col justify-between gap-5 lg:gap-20">
            <ExperienceCard
              h={52}
              className={"lg:-rotate-12 lg:-translate-x-10"}
            >
              <p>{EXPERIENCE_CONFIG[3].label}</p>
            </ExperienceCard>
            <ExperienceCard h={265}>
              <p>{EXPERIENCE_CONFIG[4].label}</p>
            </ExperienceCard>
            <ExperienceCard
              h={28}
              className={"lg:rotate-12 lg:-translate-x-10"}
            >
              <p>{EXPERIENCE_CONFIG[5].label}</p>
            </ExperienceCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  children,
  className,
  h,
}: {
  h: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Card
      className={cn(className, "lg:max-w-xs w-full")}
      style={{
        backgroundColor: `hsla(${h},50%,86%,0.5)`,
        borderColor: `hsla(${h},50%,86%)`,
      }}
    >
      <CardHeader className="py-3 px-4 lg:p-6">
        <div className="flex gap-x-3 lg:gap-x-4 items-center">
          <CustomSiren h={h} />
          {children}
        </div>
      </CardHeader>
    </Card>
  );
}

const CustomSiren = ({ h = 8 }) => {
  const color1 = `hsl(${h}, 71%, 94.5%)`; //lighten(baseColor, 40); // Lighten the base color
  const color2 = `hsl(${h}, 71%, 50%)`; //baseColor; // Use the base color directly
  const color3 = `hsl(${h}, 71%, 70%)`; // lighten(baseColor, 20); // Lighten the base color a bit

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      className="shrink-0"
    >
      <g clipPath="url(#clip0_41_1886)">
        <path
          d="M39 48.6204H9C4.029 48.6204 0 44.5914 0 39.6204L0 9.62036C0 4.64936 4.029 0.620361 9 0.620361L39 0.620361C43.971 0.620361 48 4.64936 48 9.62036V39.6204C48 44.5914 43.971 48.6204 39 48.6204Z"
          fill={color1}
        />
        <path
          d="M23.078 19.6793C19.55 20.1323 17 23.3078 17 26.8643V29.6198H31.001V26.6198C31.001 22.4573 27.347 19.1303 23.078 19.6793ZM24.0005 23.6198C22.346 23.6198 21.0005 24.9653 21.0005 26.6198C21.0005 27.1733 20.5535 27.6203 20 27.6203C19.4465 27.6203 18.9995 27.1718 18.9995 26.6198C19.001 23.8628 21.2435 21.6203 24.0005 21.6203C24.554 21.6203 25.001 22.0688 25.001 22.6208C25.001 23.1728 24.554 23.6198 24.0005 23.6198Z"
          fill={color2}
        />
        <path
          d="M24.0005 17.6199C23.447 17.6199 23 17.1714 23 16.6194V13.6194C23 13.0674 23.447 12.6204 24.0005 12.6204C24.554 12.6204 25.001 13.0689 25.001 13.6209V16.6209C25.001 17.1729 24.554 17.6199 24.0005 17.6199Z"
          fill={color3}
        />
        <path
          d="M17.9999 19.621C17.7434 19.621 17.4884 19.5235 17.2934 19.3285L15.1724 17.2075C14.7824 16.8175 14.7824 16.1845 15.1724 15.793C15.5624 15.403 16.1954 15.403 16.5869 15.793L18.7079 17.914C19.0979 18.304 19.0979 18.937 18.7079 19.3285C18.5114 19.5235 18.2549 19.621 17.9999 19.621Z"
          fill={color3}
        />
        <path
          d="M30 19.621C29.7435 19.621 29.4885 19.5235 29.2935 19.3285C28.9035 18.9385 28.9035 18.3055 29.2935 17.914L31.4145 15.793C31.8045 15.403 32.4375 15.403 32.829 15.793C33.219 16.183 33.219 16.816 32.829 17.2075L30.708 19.3285C30.5115 19.5235 30.2565 19.621 30 19.621Z"
          fill={color3}
        />
        <path
          d="M13.9995 25.6209H12.999C12.447 25.6209 12 25.1724 12 24.6204C12 24.0684 12.447 23.6199 13.0005 23.6199H14.001C14.553 23.6199 15 24.0684 15 24.6204C15 25.1724 14.553 25.6209 13.9995 25.6209Z"
          fill={color3}
        />
        <path
          d="M35.0015 25.6209H33.7505C33.197 25.6209 32.75 25.1724 32.75 24.6204C32.75 24.0684 33.197 23.6199 33.7505 23.6199H35C35.5535 23.6199 36.0005 24.0684 36.0005 24.6204C36.0005 25.1724 35.5535 25.6209 35.0015 25.6209Z"
          fill={color3}
        />
        <path
          d="M34.251 36.6204H13.749C12.7845 36.6204 12 35.8359 12 34.8699V33.3699C12 32.4054 12.7845 31.6194 13.7505 31.6194H34.251C35.2155 31.6194 36.0015 32.4039 36.0015 33.3699V34.8699C36 35.8359 35.2155 36.6204 34.251 36.6204Z"
          fill={color2}
        />
      </g>
      <defs>
        <clipPath id="clip0_41_1886">
          <rect
            width="48"
            height="48"
            fill="white"
            transform="translate(0 0.620361)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
// const CustomSiren = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="48"
//     height="49"
//     viewBox="0 0 48 49"
//     fill="none"
//   >
//     <g clip-path="url(#clip0_41_1886)">
//       <path
//         d="M39 48.6204H9C4.029 48.6204 0 44.5914 0 39.6204L0 9.62036C0 4.64936 4.029 0.620361 9 0.620361L39 0.620361C43.971 0.620361 48 4.64936 48 9.62036V39.6204C48 44.5914 43.971 48.6204 39 48.6204Z"
//         fill="#FCE9E5"
//       />
//       <path
//         d="M23.078 19.6793C19.55 20.1323 17 23.3078 17 26.8643V29.6198H31.001V26.6198C31.001 22.4573 27.347 19.1303 23.078 19.6793ZM24.0005 23.6198C22.346 23.6198 21.0005 24.9653 21.0005 26.6198C21.0005 27.1733 20.5535 27.6203 20 27.6203C19.4465 27.6203 18.9995 27.1718 18.9995 26.6198C19.001 23.8628 21.2435 21.6203 24.0005 21.6203C24.554 21.6203 25.001 22.0688 25.001 22.6208C25.001 23.1728 24.554 23.6198 24.0005 23.6198Z"
//         fill="#DA4126"
//       />
//       <path
//         d="M24.0005 17.6199C23.447 17.6199 23 17.1714 23 16.6194V13.6194C23 13.0674 23.447 12.6204 24.0005 12.6204C24.554 12.6204 25.001 13.0689 25.001 13.6209V16.6209C25.001 17.1729 24.554 17.6199 24.0005 17.6199Z"
//         fill="#EB9A8C"
//       />
//       <path
//         d="M17.9999 19.621C17.7434 19.621 17.4884 19.5235 17.2934 19.3285L15.1724 17.2075C14.7824 16.8175 14.7824 16.1845 15.1724 15.793C15.5624 15.403 16.1954 15.403 16.5869 15.793L18.7079 17.914C19.0979 18.304 19.0979 18.937 18.7079 19.3285C18.5114 19.5235 18.2549 19.621 17.9999 19.621Z"
//         fill="#EB9A8C"
//       />
//       <path
//         d="M30 19.621C29.7435 19.621 29.4885 19.5235 29.2935 19.3285C28.9035 18.9385 28.9035 18.3055 29.2935 17.914L31.4145 15.793C31.8045 15.403 32.4375 15.403 32.829 15.793C33.219 16.183 33.219 16.816 32.829 17.2075L30.708 19.3285C30.5115 19.5235 30.2565 19.621 30 19.621Z"
//         fill="#EB9A8C"
//       />
//       <path
//         d="M13.9995 25.6209H12.999C12.447 25.6209 12 25.1724 12 24.6204C12 24.0684 12.447 23.6199 13.0005 23.6199H14.001C14.553 23.6199 15 24.0684 15 24.6204C15 25.1724 14.553 25.6209 13.9995 25.6209Z"
//         fill="#EB9A8C"
//       />
//       <path
//         d="M35.0015 25.6209H33.7505C33.197 25.6209 32.75 25.1724 32.75 24.6204C32.75 24.0684 33.197 23.6199 33.7505 23.6199H35C35.5535 23.6199 36.0005 24.0684 36.0005 24.6204C36.0005 25.1724 35.5535 25.6209 35.0015 25.6209Z"
//         fill="#EB9A8C"
//       />
//       <path
//         d="M34.251 36.6204H13.749C12.7845 36.6204 12 35.8359 12 34.8699V33.3699C12 32.4054 12.7845 31.6194 13.7505 31.6194H34.251C35.2155 31.6194 36.0015 32.4039 36.0015 33.3699V34.8699C36 35.8359 35.2155 36.6204 34.251 36.6204Z"
//         fill="#DA4126"
//       />
//     </g>
//     <defs>
//       <clipPath id="clip0_41_1886">
//         <rect
//           width="48"
//           height="48"
//           fill="white"
//           transform="translate(0 0.620361)"
//         />
//       </clipPath>
//     </defs>
//   </svg>
// );
