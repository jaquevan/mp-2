export interface Character{
    id: number;
    name: string;
    image: string;

    race: string;
    originPlanet: {
        id: number;
        isDestroyed: boolean;
        image: string;
}
    affiliation: string;
    ki: string;
    maxKi: string;
}