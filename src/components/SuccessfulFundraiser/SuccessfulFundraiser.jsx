import { CardItem } from './CardItem'
import styled from "styled-components";
import { LabelHeading } from '../Common/LabelHeading'
import { Button } from '../Common/Button'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from '../Catagory/CustomArrow'
const CarouselContainer = styled.div`
    
    padding: 2em 2em;
    width: 90%;
    margin: auto; 
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;

    Button{
      margin-top: 50px;
      width: 200px;
      margin: auto;
    }
    
    `
 
export function SuccessfulFundraiser() {

  


 const bp = [
    {
          breakpoint: 1365,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
    {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  return (
      
        <CarouselContainer>
            <LabelHeading color="green">Successful Fundraising Stories</LabelHeading>
        
      <Slider 
        infinite={true}
        speed={2000}
      slidesToShow={5}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3500}
          nextArrow= {<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        responsive={bp}
        >
            
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
        </Slider>
        <Button>READ ALL STORIES</Button>
      </CarouselContainer>

    )
}