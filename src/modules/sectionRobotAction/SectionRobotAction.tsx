import React from "react";
import styles from "./SectionRobotAction.module.css";
import { Text } from "../shared/ui/text/Text";
import { Button } from "../shared/button/Button";

const SectionRobotAction = () => {
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <Text tag={"h1"} className={styles.title}>
          <Text weight="bold">Lotus RPA –</Text>
          <Text className={styles.platform}>
            {" "}
            платформа для создания цифровых
          </Text>
          <Text weight="bold"> сотрудников-роботов</Text>
        </Text>
        <Text tag={"h2"} weight="thin" className={styles.subtitle}>
          <Text tag={"span"}>
            Роботы должны работать, а люди –
            <Text tag={"span"} weight="bold">
              {" "}
              думать
            </Text>
          </Text>
          <Text tag={"span"}>
            Передайте рутинные задачи цифровому помощнику,
          </Text>
          <Text tag={"span"}>
            который <Text weight="bold">не отдыхает, не болеет</Text> и ему
            <Text weight="bold"> не нужно платить</Text> зарплату
          </Text>
        </Text>
        <Button>Хочу робота</Button>
      </div>
    </section>
  );
};

export default SectionRobotAction;
