import styles from "./Card.module.css";
import { DownArrowIcon } from "./icons/DownArrowIcon";
import { Text } from "../shared/ui/text/Text";

export const Card = () => {
  return (
    <div className={styles.root}>
      <DownArrowIcon />
      <div className={styles.wrapper}>
        <Text className={styles.text}>Снижение затрат</Text>
        <Text className={styles.text} size="small">
          Вы не платите ЗП, зарплатные налоги, отпускные и больничные
        </Text>
      </div>
    </div>
  );
};
