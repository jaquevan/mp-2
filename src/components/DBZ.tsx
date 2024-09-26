import styled from "styled-components";
import {Character} from "../interfaces/Characters.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: dimgrey;
`;

const SingleCharDiv = styled.div<{maxKi: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 18%;
    padding: 2%;
    margin: 1%;
    border: 5px yellow dotted;
    color: white;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
    object-fit: contain;
    
`;


export default function DragonBall(props : { data:Character[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Character) =>
                    <SingleCharDiv key={char.id} maxKi={char.maxKi}>
                        <h1>{char.name}</h1>
                        <img src={char.image} alt={`image of ${char.name}`}/>
                        <p>Affiliation: {char.affiliation}</p>
                        <p>Race: {char.race}</p>
                        <p>Ki: {char.ki}</p>
                        <p> Max Ki: {char.maxKi}</p>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );

}