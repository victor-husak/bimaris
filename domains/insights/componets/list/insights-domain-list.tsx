import { PublicationCard } from "@/cards/publication";

import { clsx } from "clsx";

import { ListLayout } from "@/layouts/list";

export type InsightsDomainListProps = {
  className?: string;
};

export const InsightsDomainList: React.FC<InsightsDomainListProps> = (
  props,
): React.JSX.Element => {
  return (
    <ListLayout className={clsx(props.className, "")}>
      {items.map((item) => (
        <PublicationCard key={item.id} />
      ))}
    </ListLayout>
  );
};

const items = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];
