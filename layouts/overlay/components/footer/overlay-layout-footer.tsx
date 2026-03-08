import * as Components from "./components";

import { clsx } from "clsx";

export type OverlayLayoutFooterProps = {
  className?: string;
  onClose?: () => void;
};

export const OverlayLayoutFooter: React.FC<OverlayLayoutFooterProps> = (
  props,
): React.JSX.Element => {
  return (
    <footer
      className={clsx(props.className, "container-full bg-[#F4F8FC] py-[13px]")}
    >
      <ul className="flex items-center">
        <Components.Item title="About us" href="/about-us" />

        <Components.Item title="Schedule a meeting" onClick={props.onClose} />

        <Components.Item
          title="Baltics desk"
          href="/baltics-desk"
          onClick={props.onClose}
        />
      </ul>
    </footer>
  );
};
