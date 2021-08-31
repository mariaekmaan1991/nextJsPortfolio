import Footer from "./footer";
import NavBar from "./navbar";
import styles from "../../styles/Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.LayoutColorSideBox}>
        <NavBar />
      </div>
      <main className={styles.LayoutMainBox}>
        <div className={styles.LayoutContinerBox}>{children}</div>

        <div className={styles.LayoutColorBox}></div>
      </main>
    </div>
  );
}
