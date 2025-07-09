import { FC } from "react";
import { Text } from "../text/Text";
import styles from "./Subtitle.module.css";

type SubtitleProps = {
  children: React.ReactNode;
};

const Subtitle: FC<SubtitleProps> = ({ children }) => {
  return (
    <Text tag={"h2"} weight="bold" className={styles.root}>
      {children}
    </Text>
  );
};

export default Subtitle;
