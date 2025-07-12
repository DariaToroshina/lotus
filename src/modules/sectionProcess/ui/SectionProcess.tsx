import React from "react";
import styles from "./SectionProcess.module.css";
import { Text } from "../../shared/ui/text/Text";
import Subtitle from "../../shared/ui/subtitle/Subtitle";
import { cardsConfig } from "../config/config";
import { Card } from "../../shared/ui/card/Card";
import { CardList } from "./CardList";

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
          <div className={styles.cardsLayout}>
            {cardsConfig.top.map((card, i) => {
              const cardNum = i + 1;
              return (
                <Card
                  key={i}
                  num={<div className={styles.circle}>{cardNum}</div>}
                  title={card.title}
                  description={card.description}
                >
                  <CardList list={card.checklist} />
                </Card>
              );
            })}
          </div>

          <div className={styles.cardsLayout}>
            {cardsConfig.bottom.map((card, i) => {
              const defaultCardNum = 4;
              const cardNum = defaultCardNum + i;
              return (
                <Card
                  key={i}
                  num={<div className={styles.circle}>{cardNum}</div>}
                  title={card.title}
                  description={card.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProcess;
