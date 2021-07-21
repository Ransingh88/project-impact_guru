import styled from 'styled-components'
// import styles from './Navbar.module.css'
export function Navbar() {

    const Navbar = styled.div`
    
    *{
    padding: 0;
    margin: 0;
    
    font-family: 'Hind Vadodara', sans-serif;
    font-weight: 400;
}

box-sizing: border-box;
    /* background-color: ${(props) => props.bg}; */
    width: 100vw;
    background-image: linear-gradient(to right, #54b98f , #1b8c78);
    padding: 0.5rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

div:nth-child(1){
    /* background-color: #ccc; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.4rem 0.6rem;
    width: 25rem;
}
div:nth-child(1) img{
    width: 10rem;
}
div:nth-child(1) input{
    background-color: transparent;
    border-radius: 1.5em;
    outline: none;
    border: 1px solid ${(props) => props.clr};
    height: 2.3em;
    /* width: 10em; */
}
 div:nth-child(1) input::placeholder{
    color: ${(props) => props.clr};
    padding-left: 1.5em;
    font-size: 0.8rem;
    font-weight: 400;
}
div:nth-child(2){
    /* background-color: #ccc; */

}
div:nth-child(2) ul{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
div:nth-child(2) ul li{
    margin: 0 0.8em;
    list-style-type: none;
    color: ${(props) => props.clr};
    font-weight: 500;
}
    
    
    `

    return (
        // <div className={styles.container}>
        <Navbar bg="#eee" clr="#eee">
            <div>
                <img src="/images/impactguru-white.png" alt="dggdfg" />
                <input type="search" placeholder="Search"/>
            </div>
            <div>
                <ul>
                    <li>Start a free fundraiser</li>
                    <li>How it works</li>
                    <li>Browes fundraiser</li>
                    <li>Fight Covid</li>
                    <li>User</li>
                    <li>Price</li>
                </ul>
            </div>
        </Navbar>
    )
}