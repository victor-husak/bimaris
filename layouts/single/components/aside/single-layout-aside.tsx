import { clsx } from "clsx";

export type SingleLayoutAsideProps = {
  className?: string;
};

export const SingleLayoutAside: React.FC<SingleLayoutAsideProps> = (
  props,
): React.JSX.Element => {
  return (
    <aside
      className={clsx(props.className, "flex w-95 shrink-0 flex-col gap-2.5")}
    ></aside>
  );
};
