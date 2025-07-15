import Link from "next/link";
import LogoFull from "../shared/icons/LogoFull";
import styles from "./Header.module.css";

const navigationConfig = [
  { label: "Главная", href: "#home" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Контакты", href: "#form" },
];

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.content}>
        <LogoFull />
        <nav className={styles.navigation}>
          {navigationConfig.map((link, i) => (
            <Link key={i} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
