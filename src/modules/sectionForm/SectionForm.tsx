import Link from "next/link";
import LogoFull from "../shared/icons/LogoFull";
import { Text } from "../shared/ui/text/Text";
import styles from "./SectionForm.module.css";

const SectionForm = () => {
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <Text tag={"h1"} className={styles.title} weight="bold">
          Начните автоматизацию уже сегодня
        </Text>
      </div>
    </section>
  );
};

export default SectionForm;
