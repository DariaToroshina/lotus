import React from "react";
import styles from "./SectionProcess.module.css";
import { Text } from "../shared/ui/text/Text";
import Subtitle from "../shared/ui/subtitle/Subtitle";

const SectionProcess = () => {
  return (
    <section className={styles.root}>
      <Subtitle>Как это работает?</Subtitle>
      <div className={styles.content}>
        <div className={styles.text}>
          <Text tag={"p"} weight="thin">
            Мы убеждены, что люди лучше всего умеют
            <Text tag={"span"} weight="bold">
              {" "}
              думать
            </Text>
            , а роботы —
            <Text tag={"span"} weight="bold">
              {" "}
              работать
            </Text>
          </Text>
        </div>
      </div>
    </section>
  );
};

export default SectionProcess;
