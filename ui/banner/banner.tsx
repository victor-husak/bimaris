import { clsx } from "clsx";

export type BannerProps = {
  className?: string;
  classNameDescription?: string;
  size?: "base" | "small";
  title: string;
  description: string;
  ActionComponent?: React.ReactNode;
  ImageComponent?: React.ReactNode;
  ListComponent?: React.ReactNode;
};

export const Banner: React.FC<BannerProps> = (props): React.JSX.Element => {
  return (
    <div
      className={clsx(
        "group relative flex h-[380px] items-center justify-between gap-5 rounded-2xl pt-[30px] pr-[30px] pb-[30px] pl-[40px]",
        props.className,
      )}
    >
      {/* Content */}
      <div className="flex flex-col items-start">
        {/* Title */}
        <h3
          className={clsx("mb-[45px] font-light tracking-[.024em]", {
            "text-[25px]/[32px]": props.size !== "small",
            "text-[26px]/[32px]": props.size === "small",
          })}
        >
          {props.title}
        </h3>

        {/* Preview */}
        {/* {!!props.PreviewComponent && (
          <div
            className={clsx(
              "mb-[25px] h-[200px] overflow-hidden rounded-lg",
              "[&>img]:transition-img [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>img]:group-hover:transform-[scale(1.03)]",
            )}
          >
            {props.PreviewComponent}
          </div>
        )} */}

        {/* Description */}
        <p
          className={clsx(
            props.classNameDescription,
            "mb-[24px] text-[14px]/[20px] tracking-[.028em]",
          )}
        >
          {props.description}
        </p>

        {/* List */}
        {props.ListComponent}

        {/* Actions */}
        {!!props.ActionComponent && (
          <div className="mt-[35px] flex gap-2.5">{props.ActionComponent}</div>
        )}
      </div>

      {/* Image */}
      {props.ImageComponent}
    </div>
  );
};
