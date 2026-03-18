import { clsx } from "clsx";

import { useTranslations } from "next-intl";

export type ExpertsSectionHeaderProps = {
  className?: string;
  title?: string;
  description?: string;
  RightComponent?: React.ReactNode;
};

export const ExpertsSectionHeader: React.FC<ExpertsSectionHeaderProps> = (
  props,
): React.JSX.Element => {
  const t = useTranslations("sections.experts.header");

  return (
    <header className={clsx(props.className, "container-full")}>
      {/* Title */}
      <h2 className="text-secondary mb-[25px] text-[28px]/[36px] font-light tracking-[.024em]">
        {props.title || t("title")}
      </h2>

      {/* Content */}
      <div className="flex items-end">
        {/* Description */}
        <p className="max-w-[630px] text-[14px]/[21px] tracking-[.024em] text-[#868D9A]">
          {props.description || t("description")}
        </p>

        {/* Arrows */}
        {props.RightComponent}
      </div>
    </header>
  );
};
