import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

type Props = {
  title: string;
};

export const MenuItem = ({ title }: Props) => {
  const router = useRouter();
  return (
    <button className={styles.menuItem} onClick={() => router.push("/restaraunts")}>
      <p className={styles.menuItemName}>
        {title} <img src={`/${title}.svg`} />
      </p>
    </button>
  );
};
