import { CardItem } from "../SuccessfulFundraiser/CardItem";
import styled from "styled-components";
import { LabelHeading } from "../Common/LabelHeading";
import { Button } from "../Common/Button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../Catagory/CustomArrow";

const Main = styled.div`
  background-color: whitesmoke;
`;
const CarouselContainer = styled.div`
  /* background-color: whitesmoke; */
  padding: 2em 2em;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  .TopButtons {
    display: flex;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
  }

  .TopButtons h5 {
    margin: 0 15px;
  }
`;

export function TopFundraiser() {
  const bp = [
    {
      breakpoint: 1365,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  return (
    <Main>
      <CarouselContainer>
        <LabelHeading color="green">Our Top Fundraisers</LabelHeading>

        <Slider
          infinite={true}
          speed={2000}
          slidesToShow={5}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3500}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
          responsive={bp}
        >
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </Slider>

        <div className="TopButtons">
          <Button>START A FREE FUNDRAISER</Button>
          <h5>OR</h5>
          <Button>START A FREE FUNDRAISER</Button>
        </div>
      </CarouselContainer>
    </Main>
  );
}
