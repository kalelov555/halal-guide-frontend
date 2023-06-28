import styles from "@/styles/Home.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" id="brand">
        <img
          className={styles.logo}
          alt="logo"
          src="/logo.png"
        />
      </Link>
      <SearchBar />
      <div className={styles.headerButtons}>
        <div className={styles.headerButton}>
          <img
            className={styles.iconPencil}
            alt="pencil"
            src="/pencil.png"
          />
          <p>Review</p>
        </div>
        <div className={styles.headerButton}>
          <img
            className={styles.iconLove}
            alt="pencil"
            src="/love.png"
          />
          <p>Precious</p>
        </div>
      </div>
      <Link style={{ cursor: "pointer" }} href="/login">
        <button
          className={styles.signinButton}
          style={{ cursor: "pointer" }}>
          Sign in
        </button>
      </Link>
    </nav>
  );
};
