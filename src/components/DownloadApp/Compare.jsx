import styled from 'styled-components'

export const CompareComp = styled.div`
background-color: whitesmoke;
/* height: 30vh; */
display: flex;
justify-content: center;
align-items: center;
/* padding: 2em 3em; */

@media screen and (max-width: 1128px){
         flex-direction: column;
         text-align: center;
     }

P{
    font-size: 1.6em;
    font-weight: 400;
    padding: 1em 1em;
    margin-right: 8em;
    text-align: center;

    @media screen and (max-width: 1128px){
         margin: auto;
     }
}

`