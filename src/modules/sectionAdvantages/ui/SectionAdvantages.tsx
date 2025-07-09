import { Text } from "../../shared/ui/text/Text";
import styles from "./SectionAdvantages.module.css";
import { Card } from "./Card";
import { cardsConfig } from "../config/config";

const SectionAdvantages = () => {
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <Text tag={"h1"} className={styles.title} weight="bold">
          Преимущества Lotus перед обычным сотрудником
        </Text>
        <Text tag={"h2"} weight="thin" className={styles.subtitle}>
          <Text tag={"span"}>
            С цифровыми роботами
            <Text tag={"span"} weight="bold">
              {" "}
              всё гораздо проще,
            </Text>{" "}
            чем с людьми
          </Text>
        </Text>

        <div className={styles.cards}>
          {cardsConfig.map((card, i) => {
            return (
              <Card
                icon={card.icon}
                subtitle={card.subtitle}
                title={card.title}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionAdvantages;
