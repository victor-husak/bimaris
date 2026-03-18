import { clsx } from "clsx";

export type SectionSecondProps = {
  className?: string;
  title: string;
  ImageComponent?: React.ReactNode;
};

export const SectionSecond: React.FC<SectionSecondProps> = (
  props,
): React.JSX.Element => {
  return (
    <section className={clsx(props.className, "")}>
      {/* Preview */}
      {props.ImageComponent}

      <div className="flex flex-col">
        {/* Title */}
        <h2>{props.title}</h2>
      </div>
    </section>
  );
};
