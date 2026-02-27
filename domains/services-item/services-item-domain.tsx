import { clsx } from "clsx";

export type ServicesItemDomainProps = {
  className?: string;
};

export const ServicesItemDomain: React.FC<ServicesItemDomainProps> = (
  props,
): React.JSX.Element => {
  return <div className={clsx(props.className, "")}></div>;
};
