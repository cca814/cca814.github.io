import { Outlet } from "react-router";
import Header from "../components/Header";
import styles from "../styles/mainlayout.module.css";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
