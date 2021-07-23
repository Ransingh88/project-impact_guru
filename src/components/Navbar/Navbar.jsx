import styled from 'styled-components'
// import styles from './Navbar.module.css'
import { FaUser } from 'react-icons/fa';

export function Navbar() {

    const Navbar = styled.div`
    
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Hind Vadodara', sans-serif;
    /* font-weight: 400; */
}

    /* background-color: ${(props) => props.bg}; */
    background-image: linear-gradient(to right, #54b98f , #1b8c78);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8em 1em;
    position: fixed;
    top: 0;
    width: 100%;
    border-bottom: 0.001em solid #ccc;
.logo{
    /* background-color: #ccc; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2em;
}
.logo img{
    width: 11rem;
    padding-right: 1em;
}
.logo input{
    background-color: transparent;
    border-radius: 1.5em;
    outline: none;
    border: 1px solid ${(props) => props.clr};
    height: 2.3em;
    color: white;
    padding-left: 1em;
}
 .logo input::placeholder{
    color: ${(props) => props.clr};
    padding-left: 0.8em;
    font-size: 0.8rem;
    font-weight: 400;
    opacity: 1;
}
.menu{
    /* background-color: #ccc; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.menu ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.menu ul li{
    margin: 0 0.5em;
    list-style-type: none;
    color: ${(props) => props.clr};
    font-weight: 500;
}
.fightCovid{
    background-image: linear-gradient(to right, #FFDA6B , #FE997C);
    padding: 0.6em 0.8em;
    border-radius: 2em;
    font-size: 0.8em;
    color: black !important;
    font-weight: 600 !important;
    box-shadow: 3px 3px 5px solid black;
}
.validation{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: relative;
}
.validation select{
    background-color: transparent;
    outline: none;
    border: none;
    position: absolute;
    left: -30px;
}
.currency select{
    margin-left: 1.5em;
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 1em;
}
    
    `
    

    return (
        // <div className={styles.container}>
        <Navbar bg="white" clr="white">
            <div className="logo">
                <img src="/images/impactguru-white.png" alt="dggdfg" />
                <input type="search" placeholder="Search"/>
            </div>
            <div className="menu">
                <div  className="meniItem">
                <ul>
                    <li>Start a free fundraiser</li>
                    <li>How it works</li>
                    <li>Browes fundraiser</li>
                    <li className="fightCovid">Fight Covid</li>
                    </ul>
                </div>
                
                <div className="validation">
                    <FaUser/>
                    <select name="" id="">
                        <option value=""></option>
                        <option value="">Login</option>
                        <option value="">Signup</option>
                    </select>
                </div>
                <div className="currency">
                    <select name="" id="">
                        <option value="">INR</option>
                        <option value="">USD</option>
                        <option value="">EURO</option>
                        <option value="">POUND</option>
                        <option value="">POUND</option>
                        <option value="">POUND</option>
                        <option value="">POUND</option>
                        <option value="">POUND</option>
                    </select>
                </div>
            </div>
        </Navbar>
    )
}