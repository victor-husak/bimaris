import { PublicationCard } from "@/cards/publication";

import { clsx } from "clsx";

import { ListLayout } from "@/layouts/list";

export type CaseStudiesDomainListProps = {
  className?: string;
};

export const CaseStudiesDomainList: React.FC<CaseStudiesDomainListProps> = (
  props,
): React.JSX.Element => {
  return (
    <ListLayout
      className={clsx(props.className, "")}
      title="All case studies"
      description="Explore our selected examples of immigration cases handled for individuals and businesses, demonstrating our structured approach and long-term legal support."
    >
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
