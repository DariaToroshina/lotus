import clsx from "clsx";
import { FC, ReactNode } from "react";
import { Text } from "../text/Text";
import styles from "./Card.module.css";

type CardProps = {
  title: string;
  description: string;
  num?: ReactNode;
  variant?: "default" | "wide";
  children?: ReactNode;
};

export const Card: FC<CardProps> = ({
  title,
  description,
  variant = "default",
  children,
  num,
}) => {
  return (
    <div className={clsx(styles.root, styles[variant])}>
      <div className={styles.header}>
        {num}
        <Text className={styles.text} weight="bold">
          {title}
        </Text>
      </div>

      <div className={styles.content}>
        <Text size="small">{description}</Text>
        {children}
      </div>
    </div>
  );
};
