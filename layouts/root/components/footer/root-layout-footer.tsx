import { Button } from "@/components";

import * as Components from "./components";

import { clsx } from "clsx";

import { useRootLayoutFooter } from "./root-layout-footer.hook";

import type { ServiceShort } from "@/types/services";

export type RootLayoutFooterProps = {
  className?: string;
  servicesBusinesses: ServiceShort[];
  servicesIndividuals: ServiceShort[];
  servicesInvestors: ServiceShort[];
};

export const RootLayoutFooter: React.FC<RootLayoutFooterProps> = (
  props,
): React.JSX.Element => {
  const {
    t,
    companyOptions,
    businessesOptions,
    individualsOptions,
    investorsOptions,
  } = useRootLayoutFooter(props);

  return (
    <footer
      className={clsx(
        props.className,
        "font-sp-pro-text pb-md container-full bg-[#0B0B0B]",
      )}
      style={
        {
          "--dashed-url": "url(/images/underline-footer.svg)",
        } as React.CSSProperties
      }
    >
      <Components.Topline />

      {/* Content */}
      <div
        className={clsx(
          "border-footer-b gap-x-15px flex flex-col justify-between gap-x-[30px] gap-y-[60px] border-b pt-15 pb-[89px]",
          "xl:flex-row",
          "2xl:gap-x-[50px]",
        )}
      >
        {/* Info */}
        <div
          className={clsx(
            "flex max-w-[450px] flex-1 flex-col items-start",
            "xl:max-w-[350px]",
          )}
        >
          {/* Title */}
          <span className="text-footer-second mb-[13px] text-[14px]/[18px] font-medium tracking-[.024em]">
            {t("title")}
          </span>

          {/* Description */}
          <p
            className={clsx(
              "text-footer text-[14px]/[19px] tracking-[.34px]",
              "2xl:max-w-[350px]",
            )}
          >
            {t("description")}
          </p>

          {/* Action */}
          <Button
            className="mt-6 font-medium"
            variant="second"
            href="/contact-us"
            animation="scale"
          >
            {t("action")}
          </Button>
        </div>

        {/* Menu */}
        <div
          className={clsx(
            "grid flex-1 grid-cols-1 gap-[50px]",
            "md:grid-cols-2",
            "2xl:flex",
          )}
        >
          <Components.Menu
            title={t("menu.company.title")}
            items={companyOptions}
          />

          <Components.Menu
            title={t("menu.businesses.title")}
            items={businessesOptions}
          />

          <Components.Menu
            title={t("menu.individuals.title")}
            items={individualsOptions}
          />

          <Components.Menu
            title={t("menu.investors.title")}
            items={investorsOptions}
          />
        </div>
      </div>

      <Components.Info />

      <Components.Bottom />
    </footer>
  );
};

// const companyOptions: MenuProps["items"] = [
//   { key: "1", title: "About us", href: "/about-us" },
//   { key: "2", title: "Newsroom", href: "/insights" },
//   { key: "3", title: "Capabilities" },
//   { key: "4", title: "Contact us", href: "/contact-us" },
//   { key: "5", title: "People" },
// ];

// const businessesOptions: MenuProps["items"] = [
//   { key: "1", title: "Company formation in Ukraine" },
//   { key: "2", title: "Business immigration to Ukraine" },
//   { key: "3", title: "Corporate immigration to Ukraine" },
//   { key: "4", title: "Registration representative office" },
// ];

// const individualsOptions: MenuProps["items"] = [
//   { key: "1", title: "Crypto" },
//   { key: "2", title: "Marketing and advertising" },
//   { key: "3", title: "Consumer goods" },
//   { key: "4", title: "Talent solutions" },
//   { key: "5", title: "Healthcare" },
//   { key: "6", title: "Finance" },
//   { key: "7", title: "Legal" },
// ];

// const investorsOptions: MenuProps["items"] = [
//   { key: "1", title: "Talent solutions" },
//   { key: "2", title: "Healthcare" },
//   { key: "3", title: "Finance" },
//   { key: "4", title: "Legal" },
// ];
