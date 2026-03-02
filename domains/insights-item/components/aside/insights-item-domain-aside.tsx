import { clsx } from "clsx";

export type InsightsItemDomainAsideProps = {
  className?: string;
};

export const InsightsItemDomainAside: React.FC<InsightsItemDomainAsideProps> = (
  props,
): React.JSX.Element => {
  return <div className={clsx(props.className, "")}></div>;
};
