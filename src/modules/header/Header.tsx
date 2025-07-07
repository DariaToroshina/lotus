import LogoFull from "../shared/icons/LogoFull";
import styles from "./Header.module.css";

const Header = () => {
  return <header className={styles.header}>
    <LogoFull/>
  </header>;
};

export default Header;
