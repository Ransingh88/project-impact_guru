import styled from 'styled-components'


export function Carousel() {
    

    const Container = styled.div`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    height: 80vh;
    background-image: linear-gradient(to right, #54b98f , #1b8c78);
    margin-top:60px;
    /* padding-top: 20px; */
    display: flex;
        justify-content: center;
        align-items: center;

    .CarouselContainer{
        background-color: #eee;
        /* opacity: 0.3; */
        height: 400px;
        
        width: 70%;
        /* margin: auto; */
    }
   
    
    

`


    return (
        <Container>
            <div className="CarouselContainer">

            </div>
        </Container>
    )
}