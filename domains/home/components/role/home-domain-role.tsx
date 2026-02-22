import { Section, SectionHeader, Button } from "@/components";

import { Banner, BannerList } from "@/ui";

import { clsx } from "clsx";

export type HomeDomainRoleProps = {
  className?: string;
};

export const HomeDomainRole: React.FC<HomeDomainRoleProps> = (
  props,
): React.JSX.Element => {
  return (
    <Section
      className={clsx(props.className, "")}
      HeaderComponent={
        <SectionHeader
          title="Choose your role"
          description="Founded by professional lawyers and immigration experts, Bimaris provides structured, reliable immigration legal support for individuals and businesses."
          ActionComponent={
            <Button animation="scale" href="/">
              All services
            </Button>
          }
        />
      }
    >
      {/* Content */}
      <div
        className={clsx(
          "grid grid-cols-1 grid-rows-1 gap-5",
          // "md:grid-cols-2",
          // "xl:grid-cols-2 xl:grid-rows-[minmax(413px,auto)_auto]",
        )}
      >
        <Banner
          className="bg-[#EAF0F8] text-[#314B48]"
          classNameDescription="text-[#818796] max-w-[310px]"
          title="Individuals"
          description="We help individuals navigate the Ukrainian immigration process with confidence, clarity, and professional legal support."
          ListComponent={
            <BannerList
              className="[--link-dashed-border-color:#88A7F0]"
              items={[
                "Personalized support",
                "Attorney-led solutions",
                "Automated workflow",
              ]}
            />
          }
          ActionComponent={
            <Button
              className="font-medium before:bg-[#233041]"
              animation="scale"
              href="/"
            >
              Open services
            </Button>
          }
        />

        <Banner
          className="bg-[#507FEB] text-[#FFFFFF]"
          classNameDescription="text-white/70 max-w-[340px]"
          title="Businesses"
          description="We empower businesses to build borderless teams, access the worlds talent, and create an employee experience that redefines global work."
          ListComponent={
            <BannerList
              className="[--link-dashed-border-color:#88A7F0]"
              items={[
                "Personalized support",
                "Attorney-led solutions",
                "Best for IT professionals",
              ]}
            />
          }
          ActionComponent={
            <Button
              className="font-medium text-[#507FEB]"
              animation="scale"
              variant="white"
              href="/"
            >
              Open services
            </Button>
          }
        />

        <Banner
          className="col-span-2 bg-[#D9EAE7] text-[#2F4B40]"
          classNameDescription="text-[#768480] max-w-[720px]"
          title="Investors and market entry"
          description="We support international investors entering the Ukrainian market with structured legal guidance, regulatory clarity, and risk-aware immigration solutions. From initial market entry planning to long-term presence, our team helps navigate legal frameworks and compliance requirements."
          ListComponent={
            <BannerList
              className="[--link-dashed-border-color:#A7BAB7]"
              items={[
                "Strategic market entry support",
                "Regulatory and compliance guidance",
                "Long-term presence and operational continuity",
              ]}
            />
          }
          ActionComponent={
            <Button
              className="font-medium before:bg-[#233041]"
              animation="scale"
              href="/"
            >
              Open services
            </Button>
          }
        />
      </div>
    </Section>
  );
};
