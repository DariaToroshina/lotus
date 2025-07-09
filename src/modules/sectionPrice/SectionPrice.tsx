import Link from "next/link";
import LogoFull from "../shared/icons/LogoFull";
import { Text } from "../shared/ui/text/Text";
import styles from "./SectionPrice.module.css";

const SectionPrice = () => {
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <Text tag={"h1"} className={styles.title} weight="bold">
          Тарифы и стоимость внедрения
        </Text>
        <Text tag={"h2"} weight="thin" className={styles.subtitle}>
          <Text tag={"span"}>
            Мы уверены, что цифровые роботы должны быть доступными. Если Вы
            найдете более выгодное решение — свяжитесь с нами, и мы постараемся
            предложить лучшие условия
          </Text>
        </Text>
      </div>
    </section>
  );
};

export default SectionPrice;
