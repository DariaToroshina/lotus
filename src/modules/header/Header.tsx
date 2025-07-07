import Link from "next/link";
import LogoFull from "../shared/icons/LogoFull";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <LogoFull />
      <nav className={styles.navigation}>
        <Link href={""} className={styles.link}>
          Главная
        </Link>
        <Link href={""} className={styles.link}>
          Преимущества
        </Link>
        <Link href={""} className={styles.link}>
          Контакты
        </Link>
      </nav>
    </header>
  );
};

export default Header;
