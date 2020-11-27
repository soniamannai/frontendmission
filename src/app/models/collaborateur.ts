import { Candidature } from './candidature';
import { User } from './user';

export class Collaborateur extends User {
    dateEmbauche:Date;
    salaire:number;
    candidatureMission: Candidature[];
}
