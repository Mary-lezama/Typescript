export type user = {
    name: string;
    anio: number;
}

export function createUser(name:string, anio:number): user {
    return {name,anio};
};

