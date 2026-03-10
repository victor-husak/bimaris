import { clsx } from "clsx";

export type LoginDomainProps = {
  className?: string;
};

export const LoginDomain: React.FC<LoginDomainProps> = (
  props,
): React.JSX.Element => {
  return <div className={clsx(props.className, "")}>hello</div>;
};
