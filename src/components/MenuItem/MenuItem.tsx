import styles from "@/styles/Home.module.css";

type Props = {
  title: string;
};

export const MenuItem = ({ title }: Props) => {
  return (
    <button className={styles.menuItem}>
      <p className={styles.menuItemName}>
        {title} <img src={`/${title}.svg`} />
      </p>
    </button>
  );
};
