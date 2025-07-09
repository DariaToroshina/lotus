import SectionRobotAction from "@/modules/sectionRobotAction/SectionRobotAction";
import SectionRoutine from "@/modules/sectionRoutine/SectionRoutine";
import SectionAdvantages from "@/modules/sectionAdvantages/ui/SectionAdvantages";
import SectionUseLotus from "@/modules/sectionUseLotus/ui/SectionUseLotus";
import SectionProcess from "@/modules/sectionProcess/SectionProcess";
import SectionPrice from "@/modules/sectionPrice/SectionPrice";
import SectionForm from "@/modules/sectionForm/SectionForm";
import Footer from "@/modules/footer/Footer";
import styles from "./page.module.css";
import Header from "@/modules/header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <SectionRobotAction />
      <SectionRoutine />
      <SectionAdvantages />
      <SectionUseLotus />
      <SectionProcess />
      <SectionPrice />
      <SectionForm />
      <Footer />
    </div>
  );
}
