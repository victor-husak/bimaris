import { clsx } from "clsx";

export type OverlayLayoutGroupProps = {
  className?: string;
  classNameContent?: string;
  title: string;
  children: React.ReactNode;
};

export const OverlayLayoutGroup: React.FC<OverlayLayoutGroupProps> = (
  props,
): React.JSX.Element => {
  return (
    <div className={clsx(props.className, "flex flex-col")}>
      {/* Title */}
      <span className="mb-[35px] text-[13px]/[17px] tracking-[.024em] text-[#8A91A2]">
        {props.title}
      </span>

      {/* Content */}
      <div
        className={clsx(
          "flex flex-col border-l border-[#F4F5FA] pl-[30px]",
          props.classNameContent,
        )}
      >
        {props.children}
      </div>
    </div>
  );
};
