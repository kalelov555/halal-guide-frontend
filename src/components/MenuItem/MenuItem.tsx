import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  title: string;
};

export const MenuItem = ({ title }: Props) => {
  const router = useRouter();
  let path = title.toLowerCase();
  if (title === "Add a place") path = "add-new";
  return (
    <Link href={`/${path}`}>
      <button className={styles.menuItem}>
        <div className={styles.menuItemName}>
          {title}{" "}
          {title !== "Add a place" && (
            <img src={`/${title}.svg`} />
          )}
        </div>
      </button>
    </Link>
  );
};
