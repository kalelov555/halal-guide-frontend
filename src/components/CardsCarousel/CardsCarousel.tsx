import { Restaraunt } from "@/typings/restaraunts";
import { Carousel } from "@mantine/carousel";
import styles from "@/styles/Home.module.css";
import { style } from "@mui/system";
import { Rating, styled } from "@mui/material";

type Props = {
  title: String;
  items: Restaraunt[];
  size: "sm" | "md" | "lg";
};

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export const CardsCarousel = ({
  title,
  items,
  size,
}: Props) => {
  return (
    <div className="cards-container">
      <h3
        className={styles.sectionTitle}
        style={
          size === "sm" ? { margin: "32px 0 24px" } : {}
        }>
        {title}
      </h3>
      <Carousel
        withIndicators
        height={
          size === "sm" ? 200 : size === "md" ? 240 : 300
        }
        slideSize="25%"
        slideGap={size === "sm" ? 0 : 16}
        loop
        slidesToScroll={4}>
        {items.map((i) => (
          <Carousel.Slide>
            <a
              href="/restaraunts/almaty/kochere"
              className={styles.cardContainer}>
              <img
                className={
                  size === "sm"
                    ? styles.cardImageSM
                    : styles.cardImage
                }
              />
              <p className={styles.cardName}>
                {i.location}, {i.name}
              </p>
              <p className={styles.cardRating}>
                <Rating
                  name="disabled"
                  value={i.rating.average}
                  disabled
                  size="small"
                  precision={0.5}
                />
                <span className={styles.cardRateCount}>
                  {i.rating.count}
                </span>
              </p>
            </a>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};
