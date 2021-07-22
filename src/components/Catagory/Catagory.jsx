import { LabelHeading } from "../Common/LabelHeading";
import { CatagoryCard } from "./CatagoryCard";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

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
    .swiper-container{
        padding: 30px 50px;
        /* position: absolute; */
        
    }
  `;
  return (
    <CatagoryContainer>
      <LabelHeading color="green">Crowdfunding Categories</LabelHeading>
      <div className="slider">
        {/* <CatagoryCard title="Emergency" icon="/icons/ambulance.png" /> */}
        <Swiper
          spaceBetween={30}
                  centeredSlides={true}
                  speed={4000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
                  navigation={true}
                  slidesPerView={5} spaceBetween={30} loop={true}
        >
          <SwiperSlide>
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          </SwiperSlide>
          <SwiperSlide>
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          </SwiperSlide>
          <SwiperSlide>
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          </SwiperSlide>
          <SwiperSlide>
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          </SwiperSlide>
          <SwiperSlide>
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          </SwiperSlide>
          <SwiperSlide>
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          </SwiperSlide>
          <SwiperSlide>
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          </SwiperSlide>
          <SwiperSlide>
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          </SwiperSlide>
          <SwiperSlide>
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          </SwiperSlide>
          <SwiperSlide>
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          </SwiperSlide>
          <SwiperSlide>
            <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </CatagoryContainer>
  );
}
