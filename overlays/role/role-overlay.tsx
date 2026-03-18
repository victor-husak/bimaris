import {
  OverlayLayout,
  OverlayLayoutGroup,
  OverlayLayoutItem,
  type OverlayLayoutProps,
} from "@/layouts/overlay";

export type RoleOverlayProps = {
  open?: OverlayLayoutProps["open"];
  onClose: OverlayLayoutProps["onClose"];
};

export const RoleOverlay: React.FC<RoleOverlayProps> = (
  props,
): React.JSX.Element => {
  return (
    <OverlayLayout title="Businesses" open={props.open} onClose={props.onClose}>
      <div className="flex">
        <OverlayLayoutGroup classNameContent="gap-[26px]" title="By solution:">
          <OverlayLayoutItem
            title="Company formation in Ukraine"
            description="Establish a presence in Ukraine and unlock full operational freedom."
          />

          <OverlayLayoutItem
            title="Business immigration to Ukraine"
            description="Establish a presence in Ukraine and unlock full operational freedom."
          />

          <OverlayLayoutItem
            title="Corporate immigration to Ukraine"
            description="Establish a presence in Ukraine and unlock full operational freedom."
          />

          <OverlayLayoutItem
            title="Registration representative office"
            description="Establish a presence in Ukraine and unlock full operational freedom."
          />
        </OverlayLayoutGroup>

        <OverlayLayoutGroup classNameContent="gap-[26px]" title="By region:">
          <OverlayLayoutItem
            title="Estonia"
            description="Digital ecosystem for startups and tech companies, offering EU residency and oportunities."
          />

          <OverlayLayoutItem
            title="Latvia"
            description="Strategic entry point to the EU with flexible residence programs and strong opportunities."
          />

          <OverlayLayoutItem
            title="Lithuania"
            description="Stable EU jurisdiction with growing innovation sectors, ideal for relocation and business setup."
          />
        </OverlayLayoutGroup>
      </div>
    </OverlayLayout>
  );
};
