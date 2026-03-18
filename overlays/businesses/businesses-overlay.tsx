import {
  OverlayLayout,
  OverlayLayoutGroup,
  OverlayLayoutItem,
  type OverlayLayoutProps,
} from "@/layouts/overlay";

// import * as Components from "./components";

// import { useMenuOverlay } from "./menu-overlay.hook";

// import { AnimatePresence, motion } from "framer-motion";

// import { menuItemVariants, menuVariants } from "@/generated/framer-variants";

export type BusinessesOverlayProps = {
  open?: OverlayLayoutProps["open"];
  onClose: OverlayLayoutProps["onClose"];
};

export const BusinessesOverlay: React.FC<BusinessesOverlayProps> = (
  props,
): React.JSX.Element => {
  // const {
  //   items,
  //   activeMenu,
  //   routesHistory,
  //   onChangeActiveMenu,
  //   onExited,
  //   onBack,
  // } = useMenuOverlay(props);

  return (
    <OverlayLayout
      title="Businesses"
      open={props.open}
      onClose={props.onClose}
      // onExited={onExited}
    >
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
      {/* <AnimatePresence mode="popLayout" initial={true}>
        <motion.div
          key={activeMenu}
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-1 grow flex-col py-[18.5px]"
        >
          
        </motion.div>
      </AnimatePresence> */}
    </OverlayLayout>
  );
};
