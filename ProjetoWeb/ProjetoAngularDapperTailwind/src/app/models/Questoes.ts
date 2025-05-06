import { Tipo } from "../pages/questoes/questoes.component";

export interface Questoes{
    id?:number,
    enunciado:string,
    assunto:string,
    tipo: Tipo,
    materia: string
}
