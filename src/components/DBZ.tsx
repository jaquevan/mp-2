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
    
    // this is used to make readble when colors change on hover
    &:hover p{
        color: white;
    }
    // makes the div look responsive when hovered
    &:hover{
        transform: scale(1.05);
        
        // this changes the styling if the charachters race is a saiyan, perhaps will add for other races like namek
        ${(props) => props.race === "Saiyan" ? `
                color: dodgerblue;
                background-color: gold;
                border-color: dodgerblue;
                `: ""}
        // boring styles for human 
        ${(props) => props.race === "Human" ? `
                color: black;
                background-color: burlywood;
                border-color: brown;
                `: ""}
        
        //Namekian styling
        ${(props) => props.race === "Namekian" ? `
                color: purple;
                background-color: green;
                border-color: purple ` : ""}
        
        //Frieza Styling 
        ${(props) => props.race === "Frieza Race" ? `
                color: hotpink;
                background-color: grey;
                border-color: fuchsia; ` : ""} 
        
        //Android Styling 
        ${(props) => props.race === "Android" ? `
                color: lime;
                background-color: black;
                border-color: lime; ` : ""}
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
                    //this takes from the Charachter interface, mapping over the data to create single char div
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