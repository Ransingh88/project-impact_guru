import {LabelHeading} from '../Common/LabelHeading'
import styled from 'styled-components'


const CatagoryMsgg = styled.div`

    /* height: 30vh; */
    background-color: whitesmoke;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;

    p{
        
        text-align: center;
        padding: 20px 10px;
        font-weight: 400;
        width: 80%;
    }

`
export function CatagoryMsg() {

    

    return (
        <CatagoryMsgg>
            <LabelHeading color="green">How Can Crowdfunding Help You</LabelHeading>
            <p>When the cost of medical treatments takes a toll on you financially, harness the power of social networks through crowdfunding on ImpactGuru. Get tips, crowdfunding assistance & receive donations in times of medical emergencies.</p>
        </CatagoryMsgg>
        
    )
}