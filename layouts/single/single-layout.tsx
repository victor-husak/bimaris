import { clsx } from "clsx";

export type SingleLayoutProps = {
  className?: string;
  AsideComponent: React.JSX.Element;
  ContentComponent: React.JSX.Element;
};

export const SingleLayout: React.FC<SingleLayoutProps> = (
  props,
): React.JSX.Element => {
  return (
    <section>
      {/* Content */}
      <div
        className={clsx(
          props.className,
          "container-full flex flex-col items-start gap-x-20 gap-y-15 pt-15",
          "xl:flex-row xl:pt-20",
        )}
      >
        {/* Aside */}
        {props.AsideComponent}

        {/* Content */}
        {props.ContentComponent}
      </div>
    </section>
  );
};
