export interface Character{
    id: number;
    name: string;
    image: string;
    race: string;
    affiliation: string;
    ki: string;
    maxKi: string;

    // could implement charachter transformations in the fututre, couldnt figure out now
    transformations: string[];

}