import { clsx } from "clsx";

export type RolesItemDomainPointsItemProps = {
  className?: string;
  number: number;
  title: string;
  description: string;
};

export const RolesItemDomainPointsItem: React.FC<
  RolesItemDomainPointsItemProps
> = (props): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "flex flex-col border-l border-[#E7EBF2] px-5",
      )}
    >
      {/* Number */}
      <span className="text-secondary mb-[42px] text-[20px]/[20px] tracking-[.024em]">
        {props.number}
      </span>

      {/* Title */}
      <p className="mb-[15px] text-[15px]/[19px] tracking-[.024em] text-[#2D3A52]">
        {props.title}
      </p>

      {/* Description */}
      <p className="max-w-[270px] text-[14px]/[20px] tracking-[.024em] text-[#8A91A2]">
        {props.description}
      </p>
    </div>
  );
};
