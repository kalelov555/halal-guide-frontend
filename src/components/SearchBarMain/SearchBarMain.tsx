import styles from "@/styles/Home.module.css";

export const SearchBarMain = () => {
  return (
    <form className={styles.formSearchMain}>
      <input
        className={styles.searchInputMain}
        type="search"
        placeholder="Where to?"
      />
    </form>
  );
};
