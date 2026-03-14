import { clsx } from "clsx";

export type PeopleDomainProps = {
  className?: string;
};

export const PeopleDomain: React.FC<PeopleDomainProps> = (
  props,
): React.JSX.Element => {
  return <div className={clsx(props.className, "")}></div>;
};
