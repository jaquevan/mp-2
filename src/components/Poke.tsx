import styled from "styled-components";
import {Character} from "../interfaces/Charcters.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleCharDiv=styled.div<{status: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props)=>(props.status === "Alive" ? 'darkorange' : 'black')};
    color: ${(props) => (props.status !== "Alive" ? 'white' : 'black')};
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function RickAndMorty(props : { data:Character[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Character) =>
                    <SingleCharDiv key={char.id} status={char.status}>
                        <h1>{char.name}</h1>
                        <p>{char.species !== "Human" ? "(Not Human)" : ""}</p>
                        <img src={char.image} alt={`image of ${char.name}`} />
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}