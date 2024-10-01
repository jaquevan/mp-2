export interface Character{
    id: number;
    name: string;
    image: string;
    race: string;
    affiliation: string;
    ki: string;
    maxKi: string;

    // might add code for thier planet information in the future, perhaps on click it can chnage the information on the
    // single charachter div
    originPlanet: {
        id: number;
        isDestroyed: boolean;
        image: string;
    }
}