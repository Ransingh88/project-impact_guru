import { LabelHeading } from "../Common/LabelHeading";
import { CatagoryCard } from "./CatagoryCard";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./CustomArrow";

const CatagoryContainer = styled.div`
  background-color: white;
  padding: 30px 20px 20px 20px;
  position: relative;

  .slider {
    width: 80%;
    margin: auto;
    /* margin: 30px 0; */
    padding: 20px 6px;
    /* background-color: red; */
  }
`;

export function Catagory() {
  const bp = [
    {
      breakpoint: 1184,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
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
    <>
      <CatagoryContainer>
        <LabelHeading color="green">Crowdfunding Categories</LabelHeading>
        <div className="slider">
          <Slider
            infinite={true}
            speed={2000}
            slidesToShow={6}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3500}
            responsive={bp}
            nextArrow={<SampleNextArrow />}
            prevArrow={<SamplePrevArrow />}
          >
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          </Slider>
        </div>
      </CatagoryContainer>
    </>
  );
}
