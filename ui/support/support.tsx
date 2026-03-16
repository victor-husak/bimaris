import { NextLink } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

export type SupportProps = {
  className?: string;
};

export const Support: React.FC<SupportProps> = (props): React.JSX.Element => {
  const t = useTranslations("ui.support");

  return (
    <footer
      className={clsx(
        props.className,
        "flex flex-col gap-y-4 border-b border-[#E7EBF2] py-[25px]",
        "md:flex-row md:items-center md:justify-between",
      )}
    >
      <p className="text-[13px]/[17px] tracking-[.028em] text-[#818796]">
        {t("description")}{" "}
        <NextLink
          className={clsx(
            "text-secondary link-with-arrow transition-all",
            "hover:opacity-70",
          )}
          href="/contact-us"
        >
          <span className="link-dashed [--dashed-url:url(/images/underline-second.svg)]">
            {t("action")}
          </span>

          <ArrowRightIcon className="mt-[3px] [&>path]:stroke-[#5373DB]" />
        </NextLink>
      </p>

      <p className="text-[13px]/[17px] tracking-[.028em] text-[#818796]">
        {t("haveQuestions")}{" "}
        <NextLink
          className={clsx(
            "link-with-arrow text-secondary transition-all",
            "hover:opacity-70",
          )}
          href="/contact-us"
        >
          <span className="link-dashed [--dashed-url:url(/images/underline-second.svg)]">
            {t("contact")}
          </span>

          <ArrowRightIcon className="mt-[3px] [&>path]:stroke-[#5373DB]" />
        </NextLink>
      </p>
    </footer>
  );
};
