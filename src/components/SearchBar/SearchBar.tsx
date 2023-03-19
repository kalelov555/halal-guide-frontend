import styles from "@/styles/Home.module.css";

export const SearchBar = () => {
  return (
    <form className={styles.formSearch}>
      <input
        className={styles.searchInput}
        type="search"
        placeholder="Search..."
      />
    </form>
  );
};
