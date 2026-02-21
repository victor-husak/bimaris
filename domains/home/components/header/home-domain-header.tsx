import { clsx } from "clsx";

export type HomeDomainHeaderProps = {
  className?: string;
};

export const HomeDomainHeader: React.FC<HomeDomainHeaderProps> = (
  props,
): React.JSX.Element => {
  return <div className={clsx(props.className, "")}></div>;
};
