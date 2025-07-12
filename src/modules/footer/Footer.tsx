import Link from "next/link";
import LogoFull from "../shared/icons/LogoFull";
import styles from "./Footer.module.css";

const navigationConfig = [
  { label: "Главная", href: "#home" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Тарифы", href: "#price" },
];

const Footer = () => {
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

export default Footer;
