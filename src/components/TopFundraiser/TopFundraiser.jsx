import { CardItem } from '../SuccessfulFundraiser/CardItem'
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { LabelHeading } from '../Common/LabelHeading'
import {Button} from '../Common/Button'
 
export function TopFundraiser() {


    const Main = styled.div`
    background-color: whitesmoke;
    `
    const CarouselContainer = styled.div`
    /* background-color: whitesmoke; */
    padding: 2em 2em;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    Button{
      margin-top: 50px;
    }
    .TopButtons{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
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
      <Main >
        <CarouselContainer>
            <LabelHeading color="green">Our Top Fundraisers</LabelHeading>
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
          <div className="TopButtons">
              <Button>START A FREE FUNDRAISER</Button>
              <h5>OR</h5>
        <Button>START A FREE FUNDRAISER</Button>
        </div>
          </CarouselContainer>
          </Main>

    )
}