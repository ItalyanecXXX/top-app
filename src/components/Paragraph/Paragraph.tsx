import { JSX } from "react";
import styles from "./Paragraph.module.css";
import { ParagraphProps } from "./Paragraph.props";
import cn from "classnames";

export const Paragraph = ({
  children,
  size = "base",
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size == "small",
        [styles.base]: size == "base",
        [styles.medium]: size == "medium",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
