import { clsx } from "clsx";

export type MarkdownStepsProps = {
  className?: string;
};

export const MarkdownSteps: React.FC<MarkdownStepsProps> = (
  props,
): React.JSX.Element => {
  return <div className={clsx(props.className, "")}></div>;
};
