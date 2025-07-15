import Link from "next/link";
import { Text } from "../shared/ui/text/Text";
import styles from "./SectionForm.module.css";
import { Button } from "../shared/ui/button/Button";
import { LogoForm } from "./icons/LogoForm";

const SectionForm = () => {
  return (
    <section id="form" className={styles.root}>
      <div className={styles.content}>
        <Text tag={"h1"} className={styles.title} weight="bold">
          Начните автоматизацию уже сегодня
        </Text>
        <form
          action="https://formsubmit.co/designer.akme@gmail.com"
          method="POST"
          className={styles.formCard}
        >
          <div className={styles.formCardBody}>
            <div className={styles.formSide}>
              <div>
                <label className={styles.formLabel}>
                  <input
                    type="text"
                    placeholder=" "
                    required
                    className={styles.input}
                  />
                  <span className={styles.labelText}>Почта</span>
                </label>
                <label className={styles.formLabel}>
                  <input
                    type="text"
                    placeholder=" "
                    required
                    className={styles.input}
                  />
                  <span className={styles.labelText}>Имя</span>
                </label>
                <label className={styles.formLabel}>
                  <input
                    type="text"
                    placeholder=" "
                    required
                    className={styles.input}
                  />
                  <span className={styles.labelText}>Телефон</span>
                </label>
                <label className={styles.formLabel}>
                  <input
                    type="text"
                    placeholder=" "
                    required
                    className={styles.input}
                  />
                  <span className={styles.labelText}>Название компании</span>
                </label>
              </div>
              <Button>Отправить</Button>
            </div>
            <div className={styles.infoSide}>
              <Text tag="p" className={styles.infoText} weight="bold">
                Оставьте заявку и мы свяжемся с Вами,
                <br />
                чтобы рассказать о возможностях Lotus
              </Text>
              <LogoForm />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SectionForm;
