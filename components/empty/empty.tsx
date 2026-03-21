import * as LocalImages from "./images";

import classes from "./empty.module.scss";

import { clsx } from "clsx";

export interface EmptyProps {
  className?: string;
  classnames?: {
    container?: string;
    description?: string;
  };
  title: string;
  description?: React.ReactNode;
  showPreview?: boolean;
  ActionComponent?: React.ReactNode;
}

export const Empty = ({
  className,
  classnames,
  showPreview,
  ActionComponent,
  ...props
}: EmptyProps) => {
  return (
    <div
      className={clsx(
        className,
        "flex flex-col items-center justify-center py-8 transition-all",
      )}
    >
      {showPreview && <LocalImages.Preview className={classes.preview} />}

      <span className={classes.title}>{props.title}</span>

      {!!props.description && (
        <p className={clsx(classnames?.description, classes.description)}>
          {props.description}
        </p>
      )}

      {!!ActionComponent && (
        <div className={classes.actions}>{ActionComponent}</div>
      )}
    </div>
  );
};
