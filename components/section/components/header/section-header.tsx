import { clsx } from "clsx";

export type SectionHeaderProps = {
  className?: string;
  classNameDescription?: string;
  title: string;
  description: string;
  ActionComponent?: React.ReactNode;
};

export const SectionHeader: React.FC<SectionHeaderProps> = (
  props,
): React.JSX.Element => {
  return (
    <header
      className={clsx(props.className, "flex flex-col items-center py-25")}
    >
      {/* Title */}
      <h2 className="text-section-title text-center text-[28px]/[36px] font-light tracking-[.024em]">
        {props.title}
      </h2>

      {/* Description */}
      <p
        className={clsx(
          props.classNameDescription,
          "text-section-description mt-6.5 max-w-120 text-center text-[14px]/[21px] tracking-[.024em]",
          { "mb-7.5": !!props.ActionComponent },
        )}
      >
        {props.description}
      </p>

      {/* Action */}
      {props.ActionComponent}
    </header>
  );
};
