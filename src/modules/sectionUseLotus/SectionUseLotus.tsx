import React from "react";
import styles from "./SectionUseLotus.module.css";
import { Text } from "../shared/ui/text/Text";
import Subtitle from "../shared/ui/subtitle/Subtitle";
import { Button } from "../shared/ui/button/Button";
import { Chip } from "./Chip";

const chipsConfig = [
  "Финансы",
  "Производство",
  "HoReCa",
  "Ритейл",
  "Страхование",
  "ИТ",
  "E-commerce",
  "Банки",
  "Образование",
  "Строительство",
  "и многие другие",
];

const SectionUseLotus = () => {
  return (
    <section className={styles.root}>
      <Subtitle>Где можно использовать Lotus RPA?</Subtitle>
      <div className={styles.content}>
        <div className={styles.text}>
          <Text tag={"p"} weight="thin">
            <Text tag={"span"} weight="bold">
              Lotus RPA{" "}
            </Text>
            легко встроится в самые
            <Text tag={"span"} weight="bold">
              {" "}
              различные{" "}
            </Text>
            бизнес-процессы:
          </Text>
        </div>
      </div>
      <div className={styles.chips}>
        {chipsConfig.map((chip, i) => (
          <Chip text={chip} key={i} />
        ))}
      </div>
      <Subtitle>Есть ли сферы, где RPA неприменим?</Subtitle>
      <div className={styles.content}>
        <div className={styles.text}>
          <Text tag={"p"} weight="thin">
            Мы полагаем, что таких сфер
            <Text tag={"span"} weight="bold">
              {" "}
              не существует.{" "}
            </Text>
            Заполните форму и мы расскажем об этом
          </Text>
          <Button className={styles.button} href="#form">
            Заполнить форму
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionUseLotus;
