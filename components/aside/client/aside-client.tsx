import { clsx } from "clsx";

export type AsideClientProps = {
  className?: string;
};

export const AsideClient: React.FC<AsideClientProps> = (
  props,
): React.JSX.Element => {
  return (
    <div className={clsx(props.className, "py-[15px] pr-[34px] pl-5")}></div>
  );
};
