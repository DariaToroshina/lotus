import React from "react";
import styles from "./Section.module.css";
import { Text } from "../../shared/ui/text/Text";
import Subtitle from "../../shared/ui/subtitle/Subtitle";
import { cardsConfig } from "../config/config";
import { Card } from "../../shared/ui/card/Card";
import { Button } from "@/modules/shared/ui/button/Button";
import { LicenseIcon } from "../icons/LicenseIcon";

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
                  <Button href="#form">Выбрать тариф</Button>
                </div>
              </Card>
            );
          })}
        </div>
        <div className={styles.cardLicensel}>
          <div className={styles.discription}>
            <div className={styles.titleLicensel}>
              <LicenseIcon />
              <Text weight="bold" className={styles.textLicense}>
                Лицензия на платформу Lotus
              </Text>
            </div>
            <Text size="small" className={styles.textLicense}>
              Оптимален для тех, кто хочет получить максимум от RPA без
              ограничений. Включает полный доступ к платформе, поддержку,
              обучение и сопровождение на всех этапах
            </Text>
          </div>
          <div className={styles.priceLicensel}>
            <Text
              tag={"h2"}
              weight="bold"
              size="small"
              className={styles.textLicense}
            >
              <Text tag={"span"} weight="bold" className={styles.textLicense}>
                100 000 ₽
              </Text>{" "}
              / год
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProcess;
