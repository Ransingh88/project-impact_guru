import { CardItem } from './CardItem'
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import {LabelHeading} from '../Common/LabelHeading'
 
export function SuccessfulFundraiser() {

    const CarouselContainer = styled.div`
    
    padding: 2em 2em;
    width: 90%;
    margin: auto;
    `

    const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
    return (
        <CarouselContainer>
            <LabelHeading color="green">Successful Fundraising Stories</LabelHeading>
        <Carousel
          itemsToShow={4}
          enableAutoPlay
          autoPlaySpeed={3000}
          pagination={false}
          easing="ease"
          transitionMs={3000}
          breakPoints={breakPoints}
        >
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            </Carousel>
            </CarouselContainer>
    )
}