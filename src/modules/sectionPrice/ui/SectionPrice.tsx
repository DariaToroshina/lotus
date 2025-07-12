import React from "react";
import styles from "./Section.module.css";
import { Text } from "../../shared/ui/text/Text";
import Subtitle from "../../shared/ui/subtitle/Subtitle";
import { cardsConfig } from "../config/config";
import { Card } from "../../shared/ui/card/Card";

const SectionProcess = () => {
  return (
    <section id="price" className={styles.root}>
      <div className={styles.content}>
        <Subtitle>Тарифы и стоимость внедрения</Subtitle>
        <div className={styles.text}>
          <Text tag={"p"} weight="thin">
            Мы уверены, что цифровые роботы должны быть доступными. Если Вы
            найдете более выгодное решение — свяжитесь с нами, и мы постараемся
            предложить лучшие условия
          </Text>
        </div>
      </div>
      <div className={styles.cards}>
        {cardsConfig.map((card, i) => {
          return (
            <Card
              key={i}
              title={card.title}
              description={card.description}
              text={card.text}
              button={card.button}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SectionProcess;
