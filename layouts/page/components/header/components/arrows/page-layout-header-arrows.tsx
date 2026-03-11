import { ButtonIcon } from "@/components";

import { ArrowRightIcon } from "@/icons";

import { clsx } from "clsx";

export type PageLayoutHeaderArrowsProps = {
  className?: string;
  ActionComponent?: React.ReactNode;
  onTrigger: (type: "prev" | "next") => void;
};

export const PageLayoutHeaderArrows: React.FC<PageLayoutHeaderArrowsProps> = (
  props,
): React.JSX.Element => {
  return (
    <div className={clsx(props.className, "mt-[30px] flex items-center")}>
      {/* Arrows */}
      <div className={clsx("flex items-center gap-2")}>
        <ButtonIcon
          className="rotate-180"
          onClick={() => props.onTrigger("prev")}
        >
          <ArrowRightIcon color="#fff" />
        </ButtonIcon>

        <ButtonIcon onClick={() => props.onTrigger("next")}>
          <ArrowRightIcon color="#fff" />
        </ButtonIcon>
      </div>

      {/* Action */}
      {props.ActionComponent && (
        <>
          {/* Hr */}
          <div className="mx-[15px] h-2 w-px bg-white/20" />

          {props.ActionComponent}
        </>
      )}
    </div>
  );
};
