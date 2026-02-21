import { Button } from "@/components";

import * as Components from "./components";

import { clsx } from "clsx";

import { type MenuProps } from "./components";

export type RootLayoutFooterProps = {
  className?: string;
};

export const RootLayoutFooter: React.FC<RootLayoutFooterProps> = (
  props,
): React.JSX.Element => {
  return (
    <footer
      className={clsx(
        props.className,
        "font-sp-pro-text pb-md container-full bg-[#0B0B0B]",
      )}
      style={{ "--dashed-url": "url(/images/underline-footer.svg)" }}
    >
      <Components.Topline />

      {/* Content */}
      <div className="border-footer-b gap-x-15px flex justify-between border-b pt-15 pb-[89px]">
        {/* Info */}
        <div className="flex max-w-[350px] flex-1 flex-col items-start">
          {/* Title */}
          <span className="text-footer-second mb-[13px] text-[14px]/[18px] font-medium tracking-[.024em]">
            Immigration, with clarity
          </span>

          {/* Description */}
          <p className="text-footer max-w-[300px] text-[14px]/[19px] tracking-[.012em]">
            Personalized immigration legal support for individuals - handled
            with clarity, care, and precision.
          </p>

          {/* Action */}
          <Button
            className="mt-6 font-normal"
            variant="second"
            href="/"
            animation="scale"
          >
            Contact us
          </Button>
        </div>

        {/* Menu */}
        <menu className="flex gap-[50px]">
          <Components.Menu title="Company" items={companyOptions} />

          <Components.Menu title="Businesses" items={businessesOptions} />

          <Components.Menu title="Individuals" items={individualsOptions} />

          <Components.Menu title="Contact" items={contactOptions} />
        </menu>
      </div>

      <Components.Info />

      <Components.Bottom />
    </footer>
  );
};

const companyOptions: MenuProps["items"] = [
  { key: "1", title: "About us" },
  { key: "2", title: "Newsroom" },
  { key: "3", title: "Capabilities" },
  { key: "4", title: "Contact us" },
  { key: "5", title: "People" },
];

const businessesOptions: MenuProps["items"] = [
  { key: "1", title: "Company formation in Ukraine" },
  { key: "2", title: "Business immigration to Ukraine" },
  { key: "3", title: "Corporate immigration to Ukraine" },
  { key: "4", title: "Registration representative office" },
];

const individualsOptions: MenuProps["items"] = [
  { key: "1", title: "Crypto" },
  { key: "2", title: "Marketing and advertising" },
  { key: "3", title: "Consumer goods" },
  { key: "4", title: "Talent solutions" },
  { key: "5", title: "Healthcare" },
  { key: "6", title: "Finance" },
  { key: "7", title: "Legal" },
];

const contactOptions: MenuProps["items"] = [
  { key: "1", title: "Contact us" },
  { key: "2", title: "Our locations" },
  { key: "3", title: "Book a meeting" },
];
