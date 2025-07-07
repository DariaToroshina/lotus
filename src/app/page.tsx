import styles from "./page.module.css";
import Header from "@/modules/header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
    </div>
  );
}
