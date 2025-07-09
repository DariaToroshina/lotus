import React from "react";
import styles from "./SectionUseLotus.module.css";
import { Text } from "../shared/ui/text/Text";

const SectionUseLotus = () => {
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <Text tag={"h1"} className={styles.title}>
          <Text weight="bold">Где можно использовать Lotus RPA?</Text>
        </Text>
        <div className={styles.text}>
          <Text tag={"h2"} weight="thin" className={styles.subtitle}>
            <Text tag={"span"}>
              <Text tag={"span"} weight="bold">
                Lotus RPA{" "}
              </Text>
              легко встроится в самые{" "}
              <Text tag={"span"} weight="bold">
                различные{" "}
              </Text>
              бизнес-процессы:
            </Text>
          </Text>
        </div>
      </div>
    </section>
  );
};

export default SectionUseLotus;
