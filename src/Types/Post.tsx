import type Coment from './Coment'


export interface PostProps{
    autorPic:string;
    name:string;
    cargo:string;
    comentsProntos?: Coment[]
}
