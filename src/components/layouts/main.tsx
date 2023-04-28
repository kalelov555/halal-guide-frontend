import { ReactNode } from "react"
import styles from "@/styles/Home.module.css";
import { Navbar } from "../Navbar/Navbar";
import { MenuItem } from "../MenuItem/MenuItem";

type Props = {
    children: ReactNode;
}

export const MainLayout = ({children}: Props) => {
    return <main className={styles.main}>
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
    </main>
}
