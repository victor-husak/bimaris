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
          "container-full flex items-start gap-x-20 pt-20",
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
