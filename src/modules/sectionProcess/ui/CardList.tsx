import { FC } from "react";
import styles from "./CardList.module.css";
import { CheckIcon } from "../icons/CheckIcon";

type CardListProps = {
  list: string[];
};

export const CardList: FC<CardListProps> = ({ list }) => {
  return (
    <ul className={styles.root}>
      {list.map((item, i) => (
        <li key={i} className={styles.wrapper}>
          <CheckIcon className={styles.icon} /> {item}
        </li>
      ))}
    </ul>
  );
};
