import { GoogleMap } from "@/components/GoogleMap/GoogleMap";
import { MainLayout } from "@/components/layouts/main";
import styles from "@/styles/Home.module.css";
import { Rating } from "@mui/material";

export default function Restaraunt() {
  return (
    <MainLayout>
      <main className="restaraunt">
        <section className="section heading">
          <div className="row">
            <h1>Kochere</h1>
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
              <div></div>
              <div></div>
              <div></div>
              <div></div>
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
                PRICE RANGE
              </p>
              <p
                className="infoP"
                style={{
                  margin: "4px 0",
                  color: "black",
                }}>
                KZT 1,500 - KZT 4,500
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
                Turkey, Fast Food
              </p>
              <p
                className="bold infoP"
                style={{
                  margin: "12px 0 0",
                  color: "black",
                }}>
                Special Diets
              </p>
              <p
                className="infoP"
                style={{
                  margin: "4px 0",
                  color: "black",
                }}>
                Vegeterian
              </p>
              <p
                className="bold infoP"
                style={{
                  margin: "12px 0 0",
                  color: "black",
                }}>
                View all details
              </p>
              <p
                className="infoP"
                style={{
                  margin: "4px 0",
                  color: "black",
                }}>
                Meals, Features, About
              </p>
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
    </MainLayout>
  );
}
