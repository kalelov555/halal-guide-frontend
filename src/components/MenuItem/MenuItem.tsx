import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

type Props = {
  title: string;
};

export const MenuItem = ({ title }: Props) => {
  const router = useRouter();
  let path = title.toLowerCase();
  if (title === "Add a place") path = "add-new";
  return (
    <button
      className={styles.menuItem}
      onClick={() => router.push(`/${path}`)}>
      <a className={styles.menuItemName}>
        {title} <img src={`/${title}.svg`} />
      </a>
    </button>
  );
};
