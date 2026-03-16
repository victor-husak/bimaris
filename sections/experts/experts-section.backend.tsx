import { ExpertsSection, type ExpertsSectionProps } from "./experts-section";

import { getExperts } from "@/api/strapi/queries/experts";

export type ExpertsSectionBackendProps = ExpertsSectionProps;

export const ExpertsSectionBackend: React.FC<
  ExpertsSectionBackendProps
> = async (props): Promise<React.JSX.Element> => {
  const experts = await getExperts({});

  return <ExpertsSection {...props} data={experts.data} />;
};
