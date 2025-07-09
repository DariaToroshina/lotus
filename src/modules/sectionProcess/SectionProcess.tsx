import Link from "next/link";
import LogoFull from "../shared/icons/LogoFull";
import { Text } from "../shared/ui/text/Text";
import styles from "./SectionProcess.module.css";

const SectionProcess = () => {
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <Text tag={"h1"} className={styles.title} weight="bold">
          Как это работает?
        </Text>
        <Text tag={"h2"} weight="thin" className={styles.subtitle}>
          <Text tag={"span"}>
            Мы убеждены, что люди лучше всего умеют
            <Text tag={"span"} weight="bold">
              {" "}
              думать
            </Text>{" "}
            , а роботы —
            <Text tag={"span"} weight="bold">
              {" "}
              работать
            </Text>{" "}
          </Text>
        </Text>
      </div>
    </section>
  );
};

export default SectionProcess;
