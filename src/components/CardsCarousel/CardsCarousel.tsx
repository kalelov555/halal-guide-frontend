import {
  Restaraunt,
  RestarauntApi,
} from "@/typings/restaraunts";
import { Carousel } from "@mantine/carousel";
import styles from "@/styles/Home.module.css";
import { style } from "@mui/system";
import { Rating, styled } from "@mui/material";
import Link from "next/link";

type Props = {
  title: String;
  items: RestarauntApi[];
  size: "sm" | "md" | "lg";
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const images = [
  "kochere.jpg",
  "ksf.jpg",
  "alani.jpg",
  "qaganat.jpg",
];

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
            <Link
              href={`/restaraunts/almaty/${i.info.name.toLowerCase()}`}
              className={styles.cardContainer}>
              <img
                src={`/restaraunts/${
                  images[getRandomInt(4)]
                }`}
                className={
                  size === "sm"
                    ? styles.cardImageSM
                    : styles.cardImage
                }
              />
              <p className={styles.cardName}>
                Almaty, Kazakhstan, {i.info.name}
              </p>
              <p className={styles.cardRating}>
                <Rating
                  name="disabled"
                  value={4.5}
                  disabled
                  size="small"
                  precision={0.5}
                />
                <span className={styles.cardRateCount}>
                  {300}
                </span>
              </p>
            </Link>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};
