import { clsx } from "clsx";

export type AsideGroupProps = {
  className?: string;
  title: string;
  children: React.ReactNode;
};

export const AsideGroup: React.FC<AsideGroupProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "rounded-[11px] border border-[#E7EAF2]",
      )}
    >
      {/* Header */}
      <header className="flex border-b border-[#E7EAF2] px-5 py-[15px]">
        <div className="font-sf-pro rounded-full bg-[#C1DBFF] px-2 py-[5px] text-[12px]/[14px] text-[#00335A]">
          <span>{props.title}</span>
        </div>
      </header>

      {/* Children */}
      {props.children}
    </div>
  );
};
