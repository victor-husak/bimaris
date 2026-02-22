import { ReactLenis } from "lenis/react";

export type RootLayoutScrollProps = {
  className?: string;
  children: React.ReactNode;
};

export const RootLayoutScroll: React.FC<RootLayoutScrollProps> = (
  props,
): React.JSX.Element => {
  return (
    <ReactLenis root className={props.className}>
      {props.children}
    </ReactLenis>
  );
};
