import { clsx } from "clsx";

export type SingleLayoutAsideProps = {
  className?: string;
  children?: React.ReactNode;
};

export const SingleLayoutAside: React.FC<SingleLayoutAsideProps> = (
  props,
): React.JSX.Element => {
  return (
    <aside
      className={clsx(
        props.className,
        "flex w-full max-w-75 shrink-0 flex-col gap-2.5",
        "xl:sticky xl:top-25",
        "2xl:max-w-95",
      )}
    >
      {props.children}
    </aside>
  );
};
