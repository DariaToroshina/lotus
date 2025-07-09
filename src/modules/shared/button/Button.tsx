import clsx from "clsx";
import styles from "./Button.module.css";
import React, { FC } from "react";
import Link from "next/link";

type Size = "default" | "small";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  size?: Size;
  href?: string;
};

export const Button: FC<ButtonProps> = ({
  className,
  children,
  size = "default",
  href,
  onClick,
}) => {
  if (href) {
    return (
      <Link
        onClick={onClick}
        className={clsx(styles.root, styles[size], className)}
        href={href}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={clsx(styles.root, styles[size], className)}
    >
      {children}
    </button>
  );
};
