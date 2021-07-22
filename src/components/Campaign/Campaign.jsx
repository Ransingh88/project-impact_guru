import styled from 'styled-components'


export function Campaign() {
    

    const Container = styled.div`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    height: 80vh;
    background-image: linear-gradient(to right, #FFDA6B , #FE997C);
    /* margin-top:60px; */
    /* padding-top: 20px; */
    display: flex;
        justify-content: center;
        align-items: center;

    .CarouselContainer{
        background-color: #eee;
        /* opacity: 0.3; */
        height: 400px;
        text-align: center;
        padding: 20px;
        width: 70%;
        /* margin: auto; */
    }
   
    
    

`


    return (
        <Container>
            <div className="CarouselContainer">
                <h3>Ongoing Fundraising Campaigns</h3>
            </div>
        </Container>
    )
}