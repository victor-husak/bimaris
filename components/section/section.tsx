import { clsx } from "clsx";

export type SectionProps = {
  className?: string;
  id?: string;
  children: React.ReactNode;
  HeaderComponent: React.ReactNode;
};

export const Section: React.FC<SectionProps> = (props): React.JSX.Element => {
  return (
    <section className={clsx(props.className, "container-full")} id={props.id}>
      {props.HeaderComponent}

      {props.children}
    </section>
  );
};
