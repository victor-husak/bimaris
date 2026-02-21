import { Button } from "@/components";

import * as Components from "./components";
import * as Icons from "./icons";

import { clsx } from "clsx";

export type RootLayoutHeaderProps = {
  className?: string;
};

export const RootLayoutHeader: React.FC<RootLayoutHeaderProps> = (
  props,
): React.JSX.Element => {
  return (
    <div
      className={clsx(
        props.className,
        "relative container-full bg-background-secondary h-17.5 flex items-center z-9",
      )}
    >
      <ul className="flex ml-[-12.5px]">
        <Components.Item withArrow title="Businesses" />

        <Components.Item withArrow title="Private clients" />

        <Components.Item withArrow title="Investors" />
      </ul>

      <Icons.Logo className="absolute left-1/2 -translate-x-1/2" />

      <ul className="flex ml-auto">
        <Components.Item title="Businesses" />

        <Components.Item title="Private clients" />

        <Components.Item title="Investors" />
      </ul>

      <Button className="ml-[27.5px]" size="small" animation="scale" href={"/"}>
        Log in
      </Button>

      <Components.Trigger className="absolute top-[100%] left-1/2 transform -translate-x-1/2" />
    </div>
  );
};

// sticky top-0 left-0 right-0
