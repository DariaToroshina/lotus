import clsx from "clsx";
import styles from "./Text.module.css";
import React from "react";
import { Color, Size, TextTag, Weight } from "./types";

type TextProps = {
  tag?: TextTag;
  className?: string;
  children: React.ReactNode;
  color?: Color;
  weight?: Weight;
  size?: Size;
};

export const Text: React.FC<TextProps> = ({
  tag: Tag = "span",
  className = "",
  children,
  color = "--Typo-Black",
  weight,
  size = "default",
}) => {
  return (
    <Tag
      className={clsx(
        styles.root,
        weight && styles[weight],
        size && styles[size],
        className
      )}
      style={
        color
          ? ({ "--color": `var(${color})` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
};
