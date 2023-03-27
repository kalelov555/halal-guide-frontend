import { Restaraunt } from "@/typings/restaraunts";
import { Carousel } from "@mantine/carousel";
import styles from "@/styles/Home.module.css";
import { style } from "@mui/system";
import { Rating, styled } from "@mui/material";

type Props = {
  title: String;
  items: Restaraunt[];
};

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export const CardsCarousel = ({ title, items }: Props) => {
  return (
    <div className="cards-container">
      <h3 className={styles.sectionTitle}>{title}</h3>
      <Carousel
        withIndicators
        height={240}
        slideSize="25%"
        slideGap={32}
        loop
        align="center"
        slidesToScroll={4}>
        {items.map((i) => (
          <Carousel.Slide>
            <div className={styles.cardContainer}>
              <img className={styles.cardImage} />
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
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};
