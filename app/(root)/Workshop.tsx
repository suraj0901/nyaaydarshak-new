import { Card, CardContent, CardHeader } from "@/components/ui/card";
import WORKSHOP_CONFIG, { DotIcon } from "@/config/workshop.config";

export default function Workshop() {
  return (
    <section id="training" className="bg-[#F6F9FC] lg:py-[60px] py-7">
      <div className="container px-4 space-y-10">
        <div className="space-y-4">
          <h1 className="lg:text-4xl text-[22px] tracking-wider lg:leading-[46px]  leading-[30px] font-semibold max-w-2xl">
            Empower Your Team - Awareness Workshops on Legal Rights{" "}
          </h1>
          <p className="tracking-wide">
            Our training program offers essential legal insights tailored for
            teams and organizations. Learn how to navigate workplace dynamics,
            address sensitive topics, and promote a culture of respect and
            inclusion. Empower your team with the knowledge they need to create
            a positive and harmonious work environment.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          {WORKSHOP_CONFIG.map((item) => (
            <Card key={item.label} className="border-0">
              <CardHeader>{item.icon}</CardHeader>
              <CardContent>
                <h4 className="font-semibold text-lg tracking-wide">
                  {item.label}
                </h4>
                <ul>
                  {item.list.map((item) => (
                    <li key={item} className="flex items-start gap-1 py-1.5">
                      <div className="shrink-0 mt-1">
                        <DotIcon />
                      </div>
                      <p className="ml-1">{item}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
