import styles from "./Card.module.css";
import { DownArrowIcon } from "../icons/DownArrowIcon";
import { Text } from "../../shared/ui/text/Text";
import { FC, ReactNode } from "react";

type CardProps = {
  title: string;
  subtitle: string;
  icon: ReactNode;
};

export const Card: FC<CardProps> = ({ icon, subtitle, title }) => {
  return (
    <div className={styles.root}>
      {icon}
      <div className={styles.wrapper}>
        <Text className={styles.text}>{title}</Text>
        <Text className={styles.text} size="small">
          {subtitle}
        </Text>
      </div>
    </div>
  );
};
