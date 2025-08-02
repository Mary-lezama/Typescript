import { Person, createPerson } from "./types";

const persona: Person = createPerson("Maria", 28);

console.log(`Nombre: ${persona.name}`);
console.log(`Edad: ${persona.age}`);