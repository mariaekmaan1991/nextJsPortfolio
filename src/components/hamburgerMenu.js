import Link from "next/link";
import styles from "../../styles/HamburgerMenu.module.scss";

export default function HamburgerMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      onClick={() => {
        setMenuOpen(!menuOpen);
      }}
      className={styles.ButtonNavMainBox}
    >
      <div className={styles.ButtonNavBox}></div>
      <div className={styles.ButtonNavBox}></div>
      <div className={styles.ButtonNavBox}></div>
    </div>
  );
}
