import { LabelHeading } from "../Common/LabelHeading";
import { CatagoryCard } from "./CatagoryCard";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export function Catagory() {
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

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 5 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <CatagoryContainer>
      <LabelHeading color="green">Crowdfunding Categories</LabelHeading>
      <div className="slider">
        {/* <CatagoryCard title="Emergency" icon="/icons/ambulance.png" /> */}

        <Carousel
          itemsToShow={5}
          enableAutoPlay
          autoPlaySpeed={3000}
          pagination={false}
          easing="ease"
          transitionMs={3000}
          breakPoints={breakPoints}
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
        </Carousel>
      </div>
    </CatagoryContainer>
  );
}
