import { Button } from "@/components";

import * as Components from "./components";

import { clsx } from "clsx";

export type ListLayoutProps = {
  className?: string;
  children?: React.ReactNode;
};

export const ListLayout: React.FC<ListLayoutProps> = (
  props,
): React.JSX.Element => {
  return (
    <section
      className={clsx(props.className, "section-gradient container-full mb-20")}
    >
      {/* Header */}
      <Components.Header />

      {/* Content */}
      <div className="flex flex-col gap-[50px] border-b border-[#E7EBF2] pb-15">
        <div className="grid grid-cols-3 gap-x-[30px] gap-y-[60px]">
          {props.children}
        </div>

        {/* Action */}
        <Button
          className="mx-auto"
          title="Show more (+6)"
          animation="scale"
          href="/"
        />
      </div>
    </section>
  );
};
