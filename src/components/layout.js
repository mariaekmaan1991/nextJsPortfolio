import Footer from "./footer";
import NavBar from "./navbar";
import styles from "../../styles/Layout.module.scss";
export default function Layout({ children }) {
  return (
    <>
      <div className={styles.LayoutColorOneBox}>
        <NavBar />
      </div>
      <main className={styles.LayoutMainBox}>
        <div className={styles.LayoutContinerBox}>
          {children}

          <div className={styles.LayoutColorTwoBox}></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
