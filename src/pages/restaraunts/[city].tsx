import { MainLayout } from "@/components/layouts/main";
import styles from "@/styles/Home.module.css";
import { RestarauntsSidebar } from "@/components/RestarauntsSidebar/RestarauntsSidebar";
import { CardsCarousel } from "@/components/CardsCarousel/CardsCarousel";
import { recentlyViewed } from "@/utils/mock";
import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";
import { getRestarauntsListAction } from "@/store/restaraunts/action";
import { useRouter } from "next/router";
import { Loader } from "@mantine/core";

export default function City() {
  const [city, setCity] = useState("");

  const router = useRouter();

  const { restaraunts, status } = useAppSelector(
    (state) => state.restaraunts
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRestarauntsListAction());
  }, []);

  if (status === "loading" || status === "idle")
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Loader />
      </div>
    );

  return (
    <MainLayout>
      <h1 className={styles.restarauntsCityHeader}>
        Restaraunts in {router.query.city}
      </h1>
      <main className={styles.restarauntsCityMain}>
        <div className="sidebar" style={{ width: "250px" }}>
          <RestarauntsSidebar />
          <div className="types">
            <div className="typeContainer">
              <h4>Establishment type</h4>
              <p>Restaraunts</p>
              <p>Quick Bites</p>
              <p>Dessert</p>
              <p>Coffee & Tea</p>
            </div>
            <div className="typeContainer">
              <h4>Restaraunts features</h4>
              <p>Devivery</p>
              <p>Takeout</p>
              <p>Reservations</p>
              <p>Table service</p>
            </div>
            <div className="typeContainer">
              <h4>Meals</h4>
              <p>Breakfast</p>
              <p>Brunch</p>
              <p>Lunch</p>
              <p>Dinner</p>
            </div>
            <div className="typeContainer">
              <h4>Cuisine</h4>
              <p>European</p>
              <p>Fast food</p>
              <p>Asan</p>
              <p>Turkish</p>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "1150px" }}>
          <div className="" style={{ overflow: "hidden" }}>
            {status === "succeeded" ? (
              <section className="">
                <CardsCarousel
                  size="sm"
                  title="Delivery available"
                  items={restaraunts}
                />
              </section>
            ) : (
              <></>
            )}
          </div>
          <div className="" style={{ overflow: "hidden" }}>
            <section className="">
              {status === "succeeded" ? (
                <section className="">
                  <CardsCarousel
                    size="sm"
                    title="Outdoor Seating Available"
                    items={restaraunts}
                  />
                </section>
              ) : (
                <></>
              )}
            </section>
          </div>
          <div className="" style={{ overflow: "hidden" }}>
            <section className="">
              {status === "succeeded" ? (
                <section className="">
                  <CardsCarousel
                    size="sm"
                    title="Cheap Eats"
                    items={restaraunts.filter(
                      (r) => r.averageCheck <= 1000
                    )}
                  />
                </section>
              ) : (
                <></>
              )}
            </section>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
