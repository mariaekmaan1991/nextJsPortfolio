import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import HamburgerMenu from "./hamburgerMenu";
import styles from "../../styles/NavBar.module.scss";

const useOutsideClick = (ref, callback) => {
  function handleClick(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => {
    if (menuOpen) setMenuOpen(false);
  });

  return (
    <>
      <HamburgerMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      {menuOpen && (
        <div className={styles.BackgroundNav}>
          <HamburgerMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
          <nav ref={ref} className={styles.NavBarMainBox}>
            <div className={styles.NavBarLink}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </div>
            <div>
              <Link href="/cv">
                <a>cv</a>
              </Link>
            </div>
            <div>
              <Link href="/work">
                <a>work</a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
