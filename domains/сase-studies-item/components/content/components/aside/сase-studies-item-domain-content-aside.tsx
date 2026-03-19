import { SingleLayoutAside } from "@/layouts/single";

import {
  AsideContent,
  AsideActions,
  AsideAuthor,
  AsideGroup,
  AsideClient,
  AsideLists,
} from "@/components/aside";

import { useСaseStudiesItemDomainContentAside } from "./сase-studies-item-domain-content-aside.hook";

import { clsx } from "clsx";

import type { CaseStudy } from "@/types/case-studies";

export type CaseStudiesItemDomainContentAsideProps = {
  className?: string;
  data: CaseStudy;
};

export const CaseStudiesItemDomainContentAside: React.FC<
  CaseStudiesItemDomainContentAsideProps
> = (props): React.JSX.Element => {
  const { services } = useСaseStudiesItemDomainContentAside(props);

  return (
    <SingleLayoutAside className={clsx(props.className, "")}>
      {props.data.client && (
        <AsideGroup variant="thridary" title="Client">
          <AsideClient data={props.data.client} />
        </AsideGroup>
      )}

      <AsideContent content={props.data.content} />

      <AsideLists title="Related solutions" data={services} />

      {!!props.data.experts?.length && (
        <AsideGroup title="Posted by">
          <div className="flex flex-col gap-4 p-5">
            {props.data.experts.map((expert) => (
              <AsideAuthor key={expert.id} data={expert} />
            ))}
          </div>
        </AsideGroup>
      )}

      <AsideActions listenText={props.data.content} name="Insight" />
    </SingleLayoutAside>
  );
};
