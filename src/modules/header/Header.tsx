"use client";

import Link from "next/link";
import LogoFull from "../shared/icons/LogoFull";
import styles from "./Header.module.css";
import { useState } from "react";

const navigationConfig = [
  { label: "Главная", href: "#home" },
  { label: "Преимущества", href: "#advantages" },

  { label: "Контакты", href: "#form" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.root}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <LogoFull />
        </div>
        <div className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </div>
        <nav className={`${styles.navigation} ${isOpen ? styles.open : ""}`}>
          {navigationConfig.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={styles.link}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
