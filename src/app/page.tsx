import SectionRobotAction from "@/modules/sectionRobotAction/SectionRobotAction";
import styles from "./page.module.css";
import Header from "@/modules/header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <SectionRobotAction />
    </div>
  );
}
