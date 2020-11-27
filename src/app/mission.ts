import { Technologie } from './models/technologie';

export class Mission {
    public id: number;
    public lieu: string;
    public duree: string;
    public profil: string;
    public description: string;
    public technologies: Technologie[];
    public experience:string;
}
