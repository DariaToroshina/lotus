import styles from "./Chip.module.css";
import { Text } from "../shared/ui/text/Text";
import { FC, ReactNode } from "react";

type ChipProps = {
  text: string;
};

export const Chip: FC<ChipProps> = ({ text }) => {
  return (
    <div className={styles.root}>
      <Text weight="bold" size="small">
        {text}
      </Text>
    </div>
  );
};
