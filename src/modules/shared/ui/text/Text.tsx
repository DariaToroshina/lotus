import clsx from "clsx";
import styles from "./Text.module.css";

type TextProps = {
  tag?: "span" | "p";
  className?: string;
  children: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({
  tag: Tag = "span",
  className = "",
  children,
}) => {
  return <Tag className={clsx(styles.root, className)}>{children}</Tag>;
};
