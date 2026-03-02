import { clsx } from "clsx";

export type SingleLayoutAsideGroupProps = {
  className?: string;
  children: React.ReactNode;
};

export const SingleLayoutAsideGroup: React.FC<SingleLayoutAsideGroupProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "border-px rounded-[11px] border-[#E7EAF2]",
      )}
    >
      {/* Header */}
      <header className="px-5 py-[15px]">
        <div className="bg-[#C1DBFF]">
          <span>Contents</span>
        </div>
      </header>

      {/* Children */}
      {props.children}
    </div>
  );
};
