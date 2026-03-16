import { clsx } from "clsx";

import { PageLayout } from "@/layouts/page";

import { SectionHeader } from "@/components";

import { MenuSection } from "@/sections/menu";
import { UpdatesSection } from "@/sections/updates";

import * as Components from "./componets";

import { useInsightsDomain } from "./insights-domain.hook";

import type { PublicationShort } from "@/types/publication";

export type InsightsDomainProps = {
  className?: string;
  publications: StrapiCollection<PublicationShort>;
  featuredPublications: StrapiCollection<PublicationShort>;
  legalPublications: StrapiCollection<PublicationShort>;
  searchParams?: SearchParams;
};

export const InsightsDomain: React.FC<InsightsDomainProps> = (
  props,
): React.JSX.Element => {
  const { routes } = useInsightsDomain();
  return (
    <PageLayout
      className={clsx(props.className, "")}
      routes={routes}
      HeaderComponent={
        <Components.Header
          className="mb-5"
          data={props.featuredPublications.data}
        />
      }
    >
      <MenuSection data={menu} />

      <UpdatesSection
        className="mb-25"
        data={props.legalPublications.data}
        HeaderComponent={
          <SectionHeader
            title="Selected legal alerts"
            description="Timely legal updates on immigration rules, regulatory changes, and official announcements."
          />
        }
      />

      <Components.List
        className="section-gradient"
        publications={props.publications}
      />
    </PageLayout>
  );
};

const menu = [
  {
    key: "1",
    title: "Legal alerts (+3)",
    description:
      "Timely legal updates on immigration rules, regulatory changes, and official announcements.",
    href: "/",
  },
  {
    key: "2",
    title: "All publications",
    description:
      "Expert insights and legal updates, covering immigration, relocation, and cross-border mobility.",
    href: "/insights",
  },
  {
    key: "3",
    title: "Case studies",
    description:
      "Real client stories showcasing how we handle complex immigration and relocation cases.",
    href: "/case-studies",
  },
];
