import styled from "styled-components";
import {Character} from "../interfaces/Characters.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: darkslateblue;
`;

const SingleCharDiv = styled.div<{race: string}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 18%;
    padding: 1%;
    margin: 1%;
    border: 7px yellow ridge;
    
    color: white;
    font: italic small-caps bold calc(1px + 1vw) "Arial Black", "Monospaced";
    text-align: center;
    
    object-fit: contain;
    
    &:hover{
        transform: scale(1.05);
        border: 7px darkorange ridge;
        color: ${(props) => (props.race === "Saiyan" ? 'dodgerblue' : 'darkorange')};
        background-color: ${(props) => (props.race === "Saiyan" ? 'yellow' : 'transparent')};
        border-color: ${(props) => (props.race === "Saiyan" ? 'dodgerblue' : 'darkorange')};
        
    }
    
    p {
        color: yellow;
    }
    h3 {
        color: mediumseagreen;
    }
    h4{
        color: aqua;
        font-family: "Droid Sans Mono", sans-serif;
    }

    img {
        height: 25vh;
        max-width: 90%;
        justify-content: center;
        padding-bottom: 2%;
    }

    @media screen and (max-width: 750px){
        img {
            height: 17vh;
        }
    }
    
`;




export default function DragonBall(props : { data:Character[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Character) =>
                    <SingleCharDiv key={char.id} race={char.race}>
                        <h1>{char.name}</h1>
                        <img src={char.image} alt={`image of ${char.name}`}/>
                        <h3>Affiliation: {char.affiliation}</h3>
                        <p>Race: {char.race}</p>
                        <h4>Power Level: {char.ki}</h4>
                        <br></br>
                        <h4>Max Power Level: {char.maxKi}</h4>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );

}