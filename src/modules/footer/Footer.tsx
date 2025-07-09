import Link from "next/link";
import LogoFull from "../shared/icons/LogoFull";
import styles from "./Footer.module.css";

const navigationConfig = ["Главная", "Преимущества", "Тарифы"];

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.content}>
        <LogoFull />
        <nav className={styles.navigation}>
          {navigationConfig.map((link, i) => {
            return (
              <Link key={i} href={""} className={styles.link}>
                {link}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
