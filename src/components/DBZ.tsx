import styled from "styled-components";
import {Character} from "../interfaces/Charcters.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: black;
`;

const SingleCharDiv=styled.div<{status: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 3px orange solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function DBZ(props : { data:Character[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Character) =>
                    <SingleCharDiv key={char.id} status={char.ki}>
                        <h1>{char.name}</h1>
                        <img src={char.image} alt={`image of ${char.name}`}/>
                        <p>Affiliation: {char.affiliation}</p>
                        <p>Race: {char.race}</p>
                        <p>Ki: {char.ki} / Max Ki: {char.maxKi}</p>
                        <img src={char.originPlanet.image} alt={`planet of origin`}/>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );

}