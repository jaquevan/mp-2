import DBZ from "./components/DBZ.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Character} from "./interfaces/Charcters.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px blue solid;
`;
export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Character[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://dragonball-api.com/api/characters");
            const {results} : {results: Character[]} = await rawData.json();
            setData(results);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return(
        <ParentDiv>
            <DBZ data={data}/>
        </ParentDiv>
    )
}
