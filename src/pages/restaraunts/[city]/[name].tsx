import { GoogleMap } from "@/components/GoogleMap/GoogleMap";
import { MainLayout } from "@/components/layouts/main";
import {
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";
import { getRestarauntsListAction } from "@/store/restaraunts/action";
import styles from "@/styles/Home.module.css";
import { Button, Loader, Modal, Text } from "@mantine/core";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { Key, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";

export default function Restaraunt() {
  const { restaraunts, status } = useAppSelector(
    (state) => state.restaraunts
  );

  const [opened, { open, close }] = useDisclosure(false);

  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getRestarauntsListAction());
  }, []);

  const name = router.query.name;

  const restaraunt = restaraunts.find(
    (r) => r.info.name.toLowerCase() === name
  );

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
      {status === "succeeded" && (
        <main className="restaraunt">
          <section className="section heading">
            <div className="row">
              <h1>{name}</h1>
              <p>Certified</p>
            </div>
            <div>
              <div className="row">
                <p className={styles.cardRating}>
                  <Rating
                    name="disabled"
                    value={4.5}
                    disabled
                    size="small"
                    precision={0.5}
                  />
                  <span className={styles.cardRateCount}>
                    {587} Reviews
                  </span>
                </p>
                <p className="ratingText">
                  <span>#1</span> of 1215 Restaraunts in
                  Almaty
                </p>
              </div>
            </div>
          </section>
          <div className="mainWrapper">
            <section className="section images">
              <div className="imagesContainer">
                <div>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    src={`/restaraunts/alani.jpg`}
                  />
                </div>
                <div>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    src={`/restaraunts/kochere.jpg`}
                  />
                </div>
                <div>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    src={`/restaraunts/ksf.jpg`}
                  />
                </div>
                <div>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    src={`/restaraunts/qaganat.jpg`}
                  />
                </div>
              </div>
            </section>

            <section className="section info">
              <div>
                <h4>Rating and reviews</h4>
                <div className="row">
                  <Rating
                    name="disabled"
                    value={4.5}
                    disabled
                    size="small"
                    precision={0.5}
                  />
                  <span className="ratingText">
                    587 Reviews
                  </span>
                </div>
                <p className="infoP">
                  <span className="bold">#1</span> of 12
                  Turkish in Almaty
                </p>
                <p className="infoP">
                  <span className="bold">#1</span> of 1235
                  Restaraunts in Almaty
                </p>

                <hr
                  style={{
                    margin: "40px 0",
                    backgroundColor: "gray",
                  }}
                />

                <div className="ratings">
                  <h5>RATINGS</h5>
                  <div className="ratingsRow">
                    <p>Food</p>
                    <Rating
                      name="disabled"
                      value={4.5}
                      disabled
                      size="small"
                      precision={0.5}
                    />
                  </div>
                  <div className="ratingsRow">
                    <p>Service</p>
                    <Rating
                      name="disabled"
                      value={4.5}
                      disabled
                      size="small"
                      precision={0.5}
                    />
                  </div>
                  <div className="ratingsRow">
                    <p>Value</p>
                    <Rating
                      name="disabled"
                      value={4.5}
                      disabled
                      size="small"
                      precision={0.5}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h4>Details</h4>
                <p
                  className="bold infoP"
                  style={{
                    margin: "12px 0 0",
                    color: "black",
                  }}>
                  AVARAGE PRICE
                </p>
                <p
                  className="infoP"
                  style={{
                    margin: "4px 0",
                    color: "black",
                  }}>
                  {restaraunt?.averageCheck}
                </p>

                <p
                  className="bold infoP"
                  style={{
                    margin: "12px 0 0",
                    color: "black",
                  }}>
                  CUISINES
                </p>
                <p
                  className="infoP"
                  style={{
                    margin: "4px 0",
                    color: "black",
                  }}>
                  {restaraunt?.cuisines.join(", ")}
                </p>

                <p
                  className="bold infoP"
                  style={{
                    margin: "12px 0 0",
                    color: "black",
                  }}>
                  SPECIAL DIETS
                </p>
                <p
                  className="infoP"
                  style={{
                    margin: "4px 0",
                    color: "black",
                  }}>
                  {restaraunt?.dietaryRestrictions.join(
                    ", "
                  )}
                </p>

                <p
                  className="bold infoP"
                  style={{
                    margin: "12px 0 0",
                    color: "black",
                  }}>
                  TYPE
                </p>
                <p
                  className="infoP"
                  style={{
                    margin: "4px 0",
                    color: "black",
                  }}>
                  {restaraunt?.type}
                </p>

                <Button
                  variant="light"
                  color="blue"
                  mt="sm"
                  radius="md"
                  onClick={open}>
                  View Details
                </Button>

                <Modal
                  key={restaraunt?.info.name as Key}
                  opened={opened}
                  onClose={close}
                  title="Details">
                  <div>
                    <Text
                      tt="capitalize"
                      size="md"
                      color="dimmed"
                      variant="gradient"
                      gradient={{
                        from: "indigo",
                        to: "cyan",
                        deg: 45,
                      }}
                      sx={{
                        fontFamily:
                          "Greycliff CF, sans-serif",
                      }}
                      fw={700}>
                      <span style={{ fontWeight: "bold" }}>
                        {"name"} :
                      </span>
                      {" " + restaraunt?.info.name}
                    </Text>
                    <Text
                      tt="capitalize"
                      size="md"
                      color="dimmed"
                      variant="gradient"
                      gradient={{
                        from: "indigo",
                        to: "cyan",
                        deg: 45,
                      }}
                      sx={{
                        fontFamily:
                          "Greycliff CF, sans-serif",
                      }}
                      fw={700}>
                      <span style={{ fontWeight: "bold" }}>
                        {"description"} :
                      </span>
                      {" " + restaraunt?.info.description}
                    </Text>
                    {Object.entries(restaraunt as any).map(
                      ([key, value]) => {
                        if (key === "info" || key === "id")
                          return <></>;
                        else if (
                          key === "createdAt" ||
                          key === "updatedAt"
                        )
                          return <></>;
                        else if (Array.isArray(value)) {
                          return (
                            <Text
                              tt="capitalize"
                              size="md"
                              color="dimmed"
                              variant="gradient"
                              gradient={{
                                from: "indigo",
                                to: "cyan",
                                deg: 45,
                              }}
                              sx={{
                                fontFamily:
                                  "Greycliff CF, sans-serif",
                              }}
                              fw={700}>
                              <span
                                style={{
                                  fontWeight: "bold",
                                }}>
                                {key} :
                              </span>
                              {" " + value.toString()}
                            </Text>
                          );
                        }
                        return (
                          <Text
                            tt="capitalize"
                            size="md"
                            color="dimmed"
                            variant="gradient"
                            gradient={{
                              from: "indigo",
                              to: "cyan",
                              deg: 45,
                            }}
                            sx={{
                              fontFamily:
                                "Greycliff CF, sans-serif",
                            }}
                            fw={700}>
                            <span
                              style={{
                                fontWeight: "bold",
                              }}>
                              {key} :
                            </span>
                            {" " + value}
                          </Text>
                        );
                      }
                    )}
                  </div>
                </Modal>
              </div>
              <div>
                <h4>Location and contact</h4>
                <div
                  style={{
                    width: "100%",
                    marginTop: "20px",
                  }}>
                  <GoogleMap fullWidth />
                </div>
                <p className="infoP">
                  Aksai-4 22a, Almaty, Kazakhstan
                </p>
                <p className="infoP">+7 707 373 72 85</p>
              </div>
            </section>
          </div>
        </main>
      )}
    </MainLayout>
  );
}
