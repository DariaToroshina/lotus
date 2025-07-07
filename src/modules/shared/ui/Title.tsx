import clsx from "clsx";
import styles from "./Title.module.css";

type TitleProps = {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
};

export const Title: React.FC<TitleProps> = ({
  tag: Tag = "h1",
  className = "",
  children,
}) => {
  return <Tag className={clsx(styles.root, className)}>{children}</Tag>;
};
