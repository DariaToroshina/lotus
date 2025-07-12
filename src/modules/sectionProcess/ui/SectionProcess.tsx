import React from "react";
import styles from "./SectionProcess.module.css";
import { Text } from "../../shared/ui/text/Text";
import Subtitle from "../../shared/ui/subtitle/Subtitle";
import { cardsConfig } from "../config/config";
import { Card } from "../../shared/ui/card/Card";

const SectionProcess = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
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
        <div className={styles.cards}>
          {cardsConfig.map((card, i) => {
            return (
              <Card
                key={i}
                step={card.step}
                title={card.title}
                description={card.description}
                checklist={card.checklist}
                variant={i < 3 ? "default" : "wide"}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionProcess;
