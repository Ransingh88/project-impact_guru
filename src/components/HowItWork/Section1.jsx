import styled from 'styled-components'
import { Slide4 } from './carousel/Carousel1' 

const Set1 = styled.h2`{
   padding:30px;
   overflow-wrap: break-word;
   
    text-align:center;
    width:80%;
    margin:auto;
     font-weight: 300!important;
    .flex{
        display:flex;
    }
    .box1{
        text-align:left;
        width:70%;
    }
    .box2{
         border-radius: 20px;
        padding:2rem;
        background-color: whitesmoke;
        text-align:left;
        width:40%;
    }
    input{
        background-color: whitesmoke;
        width:80%;
        margin:auto;
        padding:1rem;
        border:none;
          border-bottom: 1px solid #ebebeb;;
        

    }
    h3{
        text-align:center;
        font-size: 30px;
        font-weight: 300!important;
        line-height:20px;
    }
    p{
         text-align:center;
            font-size: 18px;
    }
    button{
        background-color: #21936a;
        width:88%;
        margin:auto;
        padding:0.8rem;
        border:none;
          border-bottom: 1px solid grey;
        margin:0.5rem;
           border-radius: 20px;
 
    }
 
}`


export function Section1() {
    return <Set1>
        <div className="flex">
            <div className="box1">
               <Slide4/>
            </div>


            <div className="box2">
                <h3>Introducing 0% platform fee</h3>
                <p>Start a fundraiser for free and get maximum funds for the cause you care about.</p>
                <div>
                    <div><input type="text" placeholder="Full Name" /></div>
                    <div><input type="email" placeholder="Email" /></div>
                    <div><input type="number" placeholder="Number" /></div>
                   <div> <input type="text" placeholder="City" /></div>
                    <div><button>Get free asisstance</button></div>
                </div>
            </div>
            
        </div>
    </Set1>
    
}