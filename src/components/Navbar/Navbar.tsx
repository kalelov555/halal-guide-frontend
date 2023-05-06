import styles from "@/styles/Home.module.css";
import { SearchBar } from "../SearchBar/SearchBar";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="/" id="brand">
        <img
          className={styles.logo}
          alt="logo"
          src="/logo.png"
        />
      </a>
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
      <button className={styles.signinButton}>
        Sign in
      </button>
    </nav>
  );
};
