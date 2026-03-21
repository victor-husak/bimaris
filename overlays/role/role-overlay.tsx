import {
  OverlayLayout,
  OverlayLayoutGroup,
  OverlayLayoutItem,
  type OverlayLayoutProps,
} from "@/layouts/overlay";

import type { BalticShort } from "@/types/baltics";
import type { ServiceShort } from "@/types/services";

import { useRoleOverlay } from "./role-overlay.hook";

export type RoleOverlayProps = {
  open?: OverlayLayoutProps["open"];
  type: "businesses" | "individuals" | "investors";
  servicesBusinesses: ServiceShort[];
  servicesIndividuals: ServiceShort[];
  servicesInvestors: ServiceShort[];
  baltics: BalticShort[];
  onClose: OverlayLayoutProps["onClose"];
};

export const RoleOverlay: React.FC<RoleOverlayProps> = (
  props,
): React.JSX.Element => {
  const { title, servicesForRole } = useRoleOverlay(props);

  return (
    <OverlayLayout
      title={title}
      open={props.open}
      onClose={props.onClose}
      onExited={() => {
        console.log("onExited");
      }}
    >
      <div className="flex">
        <OverlayLayoutGroup classNameContent="gap-[26px]" title="By solution:">
          {servicesForRole.map((service) => (
            <OverlayLayoutItem
              key={service.id}
              title={service.name}
              description={service.description}
              href={`/services/${service.slug}`}
            />
          ))}
        </OverlayLayoutGroup>

        <OverlayLayoutGroup classNameContent="gap-[26px]" title="By region:">
          {props.baltics.map((baltic) => (
            <OverlayLayoutItem
              key={baltic.id}
              title={baltic.name}
              description={baltic.description}
              href={`/baltics-desk/${baltic.slug}`}
            />
          ))}
        </OverlayLayoutGroup>
      </div>
    </OverlayLayout>
  );
};
