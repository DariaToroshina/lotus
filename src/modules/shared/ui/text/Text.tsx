import clsx from "clsx";
import styles from "./Text.module.css";
import React from "react";

type Color =
  | "--Typo-Black"
  | "--Typo-White"
  | "--Typo-OpacityWhite"
  | "--Typo-Placeholder"
  | "--Bg-Primary";

type TextTag =
  | "p"
  | "span"
  | "strong"
  | "em"
  | "b"
  | "i"
  | "u"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type Weight = "bold" | "thin";

type TextProps = {
  tag?: TextTag;
  className?: string;
  children: React.ReactNode;
  color?: Color;
  weight?: Weight;
};

export const Text: React.FC<TextProps> = ({
  tag: Tag = "span",
  className = "",
  children,
  color = "--Typo-Black",
  weight,
}) => {
  return (
    <Tag
      className={clsx(styles.root, weight && styles[weight], className)}
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
