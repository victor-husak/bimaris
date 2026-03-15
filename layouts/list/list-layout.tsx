import { Button } from "@/components";

import * as Components from "./components";

import { clsx } from "clsx";

export type ListLayoutProps = {
  className?: string;
  title: string;
  description: string;
  totalCount?: number;
  children?: React.ReactNode;
};

export const ListLayout: React.FC<ListLayoutProps> = (
  props,
): React.JSX.Element => {
  return (
    <section className={clsx(props.className, "container-full mb-20")}>
      {/* Header */}
      <Components.Header title={props.title} description={props.description} />

      {/* Content */}
      <div className="flex flex-col gap-[50px] border-b border-[#E7EBF2] pb-15">
        <div
          className={clsx(
            "grid grid-cols-1 gap-x-[30px] gap-y-[30px]",
            "md:grid-cols-2 md:gap-y-[60px]",
            "2xl:grid-cols-3",
          )}
        >
          {props.children}
        </div>

        {/* Action */}
        {props.totalCount && props.totalCount > 6 && (
          <Button
            className="mx-auto"
            title={`Show more (+${props.totalCount})`}
            animation="scale"
            href="/"
          />
        )}
      </div>
    </section>
  );
};
