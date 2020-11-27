import { Mission } from '../mission';
import { Collaborateur } from './collaborateur';
import { Technologie } from './technologie';

export class Candidature {
    id:number;
    collaborateur:Collaborateur;
    mission:Mission;
    nom:string;
    prenom:string;
    email:string;
    diplome:string;
    anneeObtention:Date;
    technologieMatrise:Technologie[];
    experience:number;
    langue:string;

}
