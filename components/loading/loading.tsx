"use client";

import PuffLoader from "react-spinners/PuffLoader";

import { CSSTransition } from "react-transition-group";

import styles from "./loading.module.scss";

import useLoading from "./loading.hook";

import { clsx } from "clsx";

export interface LoadingProps {
  className?: string;
  active?: boolean;
}

export const Loading: React.FC<LoadingProps> = (props): React.JSX.Element => {
  const { nodeRef } = useLoading(props);

  return (
    <CSSTransition
      in={props.active}
      nodeRef={nodeRef}
      timeout={0}
      classNames={{
        enterActive: styles["enter-active"],
        enterDone: styles["enter-active"],
        exitActive: styles["exit-active"],
        exitDone: styles["exit-active"],
      }}
      unmountOnExit
    >
      <div className={clsx(props.className, styles.container)} ref={nodeRef}>
        <PuffLoader color="#134EA7" />
      </div>
    </CSSTransition>
  );
};
