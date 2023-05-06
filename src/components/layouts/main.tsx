import { ReactNode } from "react";
import styles from "@/styles/Home.module.css";
import { Navbar } from "../Navbar/Navbar";
import { MenuItem } from "../MenuItem/MenuItem";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={"section secondMenu"}>
        <div className={styles.menuContainer}>
          <div className={styles.menuItems}>
            <MenuItem title="Restaraunts" />
            <MenuItem title="Products" />
            <MenuItem title="Hostels" />
            <MenuItem title="Mosque" />
            <MenuItem title="Discussion" />
          </div>
          <MenuItem title="Add a place" />
        </div>
      </section>
      {children}
      <footer className="footer">
        <div>
          <h4>About Halal Guide</h4>
          <a>About us</a>
          <a>Contact us</a>
          <a>Partners</a>
        </div>
        <div>
          <h4>Social Media</h4>
          <a>OOO</a>
          <a>OOO</a>
        </div>
      </footer>
    </main>
  );
};
