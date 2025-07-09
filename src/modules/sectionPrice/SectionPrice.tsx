import React from "react";
import styles from "./SectionPrice.module.css";
import { Text } from "../shared/ui/text/Text";
import Subtitle from "../shared/ui/subtitle/Subtitle";

const SectionPrice = () => {
  return (
    <section className={styles.root}>
      <Subtitle>Тарифы и стоимость внедрения</Subtitle>
      <div className={styles.content}>
        <div className={styles.text}>
          <Text tag={"p"} weight="thin">
            Мы уверены, что цифровые роботы должны быть доступными. Если Вы
            найдете более выгодное решение — свяжитесь с нами, и мы постараемся
            предложить лучшие условия
          </Text>
        </div>
      </div>
    </section>
  );
};

export default SectionPrice;
