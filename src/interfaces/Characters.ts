export interface Character{
    id: number;
    name: string;
    image: string;
    race: string;
    affiliation: string;
    ki: string;
    maxKi: string;

    originPlanet: {
        id: number;
        isDestroyed: boolean;
        image: string;
    }
}