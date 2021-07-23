import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


const Set5 = styled.h2`{
    padding:30px;
   
 .flex {
  display: flex;
  margin: auto;
  
   font-weight: 300!important;
    font-size: 1rem;
}
button{
      background-color: white;
     text-align:left;
    border:none;
    
}
p{
text-align:center;
}
.grid{

  display:flex;
 
  width:80%;
 
  margin:auto;
}
button:nth-child(1){
    width:17%;
  
   
}
button:nth-child(2){
    width:24%;
  
}
button:nth-child(3){
     
    width:30%;
}
button:nth-child(4){
     
     width:32%;
}
button{

    padding:1rem;
    font-weight: 400;
        font-size: 18px;
}


.box {
        font-size: 18px;
        font-weight: 400;
  width: 100%;
  margin:5px;
  border-radius:10px;
  border:1px solid rgb(231, 228, 228);
}

.grid1 {
width:80%;
margin:auto;
display:flex;
margin:auto;
}
.hwa{
    text-align:left;
    font-size: 20px;
    line-height:3rem;
    font-weight: 500;
     margin-bottom: 30px;
}
 .arrow{
        line-height:33px;
        width:15px;
        height:15px;
        padding:0 0.2rem;
        align-items: center;
        color: green;
  border-radius: 50%;
  border:1px solid green;
  margin-right:1rem;
   margin-top:2rem;


    }
     .arrow2{
        line-height:33px;
        width:20px;
        height:15px;
        padding:0 0.2rem;
        align-items: center;
        color: red;
  border-radius: 50%;
  border:1px solid red;
  margin-right:1rem;
   margin-top:2rem;


    }

   
  .border{
       
       border-bottom: 1px solid green;
  }
}`

export function Section5() {
 useEffect(() => {
        axios.get(`http://localhost:3001/SPEED`).then(({ data }) => {
            console.log(data);
         
            const [Crowdfunding, Insurance, Loans ]= data;
            setData(Crowdfunding);
            setData1(Insurance);
            setData2(Loans);
            
        });
    
      
  }, [])

    const [data, setData] = useState({ Crowdfunding: [] })
    const [data1, setData1] = useState({Insurance:[]})
    const [data2, setData2] = useState({Loans :[]})

    const handleClick = (e) => {
        axios.get(`http://localhost:3001/${e.target.value}`).then(({ data }) => {
            console.log(e.target.className, "hi")
            
            e.target.style = "border-bottom: 1px solid green;";
            const [Crowdfunding, Insurance, Loans ]= data;
            setData(Crowdfunding);
            setData1(Insurance);
            setData2(Loans);
            
        });

    }
    return <Set5>
        <div>
            <p>Crowdfunding vs Other healthcare financing solutions</p>
             <hr style={{ marginTop:"1.5rem", width: "5rem", height:"3px" ,background:"green"} }></hr>
            <div className="grid">
                <button value="SPEED" onClick={handleClick}>SPEED</button>
                <button value="ELIGIBLITY" onClick={handleClick}>ELIGIBLITY</button>
                <button value="AMOUNTDISBURSAL" onClick={handleClick}>AMOUNT DISBURSAL</button>
                <button value="SETUPCOSTANDREPAYMENT" onClick={handleClick}>SETUPCOST AND REPAYMENT</button>
            </div>
            <div className="grid1">
                <div className="box">
                    <p className="hwa">Crowdfunding on ImpactGuru.com</p>

                  
                    {data.Crowdfunding.map((e) => {
                        return <p><span className="arrow">✔</span>{e}</p>
                           
                   })}
                    
                </div>
                <div className="box">
                    <p className="hwa">Insurance</p>
                    {data1.Insurance.map((e) => {
                        return<p><span className="arrow2">✖</span>{e}</p>
                   })}
                </div>
                <div className="box">
                    <p className="hwa">Loans</p>
                  {data2.Loans.map((e) => {
                        return <p><span className="arrow2">✖</span>{e }</p>
                   })}
                </div>
           </div>
            
        </div>
    </Set5>
    
}