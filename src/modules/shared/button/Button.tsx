import clsx from "clsx";
import styles from "./Button.module.css";
import React from "react";

type Color = "--Typo-White" | "--Bg-Primary";

type ButtonTag = "button";

type Size = "default" | "small";

type ButtonProps = {
  tag?: ButtonTag;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  color?: Color;
};

export const Button: React.FC<ButtonProps> = ({
  tag: Tag = "button",
  className = "",
  children,
  color = "--Bg-Primary",
}) => {
  return (
    <Tag
      className={clsx(styles.root, className)}
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
