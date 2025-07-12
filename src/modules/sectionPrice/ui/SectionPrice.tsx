import React from "react";
import styles from "./Section.module.css";
import { Text } from "../../shared/ui/text/Text";
import Subtitle from "../../shared/ui/subtitle/Subtitle";
import { cardsConfig } from "../config/config";
import { Card } from "../../shared/ui/card/Card";
import { Button } from "@/modules/shared/ui/button/Button";

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

        <div className={styles.cards}>
          {cardsConfig.map((card, i) => {
            return (
              <Card key={i} title={card.title} description={card.description}>
                <div className={styles.cardContent}>
                  <Text weight="bold">
                    {card.price}
                    {card.condition && (
                      <Text tag="span" weight="bold" size="small">
                        {card.condition}
                      </Text>
                    )}
                  </Text>
                  <Button>Выбрать тариф</Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionProcess;
