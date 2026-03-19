import { useMemo } from "react";

import type { CaseStudiesItemDomainContentAsideProps } from "./сase-studies-item-domain-content-aside";

export const useСaseStudiesItemDomainContentAside = (
  props: CaseStudiesItemDomainContentAsideProps,
) => {
  const services = useMemo(() => {
    return props.data.services.map((service) => ({
      id: service.slug,
      name: service.name,
      href: `/services/${service.slug}`,
    }));
  }, [props.data.services]);

  return { services };
};
