import React from "react";
import styles from "./SectionRoutine.module.css";
import { Text } from "../shared/ui/text/Text";
import Subtitle from "../shared/ui/subtitle/Subtitle";

const SectionRoutine = () => {
  return (
    <section className={styles.root}>
      <Subtitle>Избавим от рутины</Subtitle>
      <div className={styles.content}>
        <div className={styles.text}>
          <Text tag={"p"} weight="thin">
            <Text tag={"span"}>
              Каждый день сотрудники тратят рабочее время на
              <Text tag={"span"} weight="bold">
                {" "}
                однообразные задачи{" "}
              </Text>
              — проверку писем, перенос данных между программами, заполнение
              таблиц и многое другое
            </Text>
          </Text>
          <div className={styles.quote}>
            <Text tag={"p"} weight="thin">
              «
              <Text tag={"span"} weight="bold">
                Lotus {""}
              </Text>
              возьмёт на себя повседневные задачи, пока вы занимаетесь
              по-настоящему важными делами»
            </Text>
          </div>
          <Text tag={"p"} weight="thin">
            Он действует как
            <Text tag="span" weight="bold">
              {" "}
              цифровой сотрудник{" "}
            </Text>
            кликает, копирует, вставляет, заполняет формы, отвечает на письма —
            всё как человек, только
            <Text tag={"span"} weight="bold">
              {" "}
              быстрее{" "}
            </Text>
            и
            <Text tag={"span"} weight="bold">
              {" "}
              без ошибок
            </Text>
          </Text>
        </div>
      </div>
    </section>
  );
};

export default SectionRoutine;
