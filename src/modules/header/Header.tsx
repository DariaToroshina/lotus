import Link from "next/link";
import LogoFull from "../shared/icons/LogoFull";
import styles from "./Header.module.css";

const navigationConfig = ["Главная", "Преимущества", "Контакты"];

const Header = () => {
  return (
    <header className={styles.header}>
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
    </header>
  );
};

export default Header;
