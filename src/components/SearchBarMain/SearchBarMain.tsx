import styles from "@/styles/Home.module.css";
import { RestarauntApi } from "@/typings/restaraunts";
import { Autocomplete } from "@mantine/core";
import Link from "next/link";
import { forwardRef } from "react";

type Props = {
  data: RestarauntApi[] | [];
};

const AutoCompleteItem = forwardRef<HTMLDivElement, any>(
  (key, ref) => {
    return (
      <div ref={ref}>
        <Link
          style={{
            color: "black",
            padding: "0 20px",
            fontSize: "24px",
            marginTop: "10px",
          }}
          href={`/restaraunts/almaty/${key.value.toLowerCase()}`}>
          {key.value}
        </Link>
      </div>
    );
  }
);

export const SearchBarMain = ({ data }: Props) => {
  let names = [] as any;
  if (data) data.map((d) => names.push(d.info.name));
  return (
    <form className={styles.formSearchMain}>
      <Autocomplete
        className={styles.searchInputMain}
        placeholder="Where to?"
        data={names}
        itemComponent={AutoCompleteItem}
      />
    </form>
  );
};
