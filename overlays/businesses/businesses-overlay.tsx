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
      <div className="flex gap-x-[90px]">
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

        <OverlayLayoutGroup classNameContent="gap-5" title="By industry:">
          <OverlayLayoutItem title="Crypto" />

          <OverlayLayoutItem title="Marketing and advertising" />

          <OverlayLayoutItem title="Consumer goods" />

          <OverlayLayoutItem title="Talent solutions" />

          <OverlayLayoutItem title="Healthcare" />

          <OverlayLayoutItem title="Finance" />

          <OverlayLayoutItem title="Legal" />
        </OverlayLayoutGroup>

        <OverlayLayoutGroup classNameContent="gap-5" title="By visa:">
          <OverlayLayoutItem title="H-1B" />

          <OverlayLayoutItem title="EB-1A" />

          <OverlayLayoutItem title="TN" />

          <OverlayLayoutItem title="L-1" />

          <OverlayLayoutItem title="O-1" />
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
