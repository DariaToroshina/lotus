import clsx from "clsx";
import styles from "./Text.module.css";
import React from "react";

type TextProps = {
  tag?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({
  tag: Tag = "p",
  className = "",
  children,
}) => {
  return <Tag className={clsx(styles.root, className)}>{children}</Tag>;
};
