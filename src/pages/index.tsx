import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { recentlyViewed } from "@/utils/mock";
import { CardsCarousel } from "@/components/CardsCarousel/CardsCarousel";
import { MenuItem } from "@/components/MenuItem/MenuItem";
import { SearchBarMain } from "@/components/SearchBarMain/SearchBarMain";
import {
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";
import { useEffect } from "react";
import { getUsersListAction } from "@/store/users/action";
import { useRouter } from "next/router";
import { MainLayout } from "@/components/layouts/main";

export default function Home() {
  const router = useRouter();
  const { users, status } = useAppSelector(
    (state) => state.users
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUsersListAction());
  }, []);
  return status === "loading" ? (
    <h1>LOADING....</h1>
  ) : (
    <>
      <Head>
        <title>Halal Guide</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <MainLayout>
        <section className={"section"}>
          <div className={styles.searchContainerBro}>
            <SearchBarMain />
          </div>
        </section>
        {recentlyViewed && (
          <section className="section">
            <CardsCarousel
              size="md"
              title="Recently Viewed"
              items={recentlyViewed}
            />
          </section>
        )}
        <section className="section">
          <CardsCarousel
            size="md"
            title="Most Loved"
            items={recentlyViewed}
          />
        </section>
        <section className="section">
          <CardsCarousel
            size="md"
            title="You might like this"
            items={recentlyViewed}
          />
        </section>
      </MainLayout>
    </>
  );
}
