import style from  './styles.module.css'
import Trash from '../assets/Trash.png'
import Like from '../assets/Like.png'
import Liked from '../assets/Like (1).png'
import { useState } from 'react'
interface MyComentProps{
    id: number;
    autorPic:string;
    name: string;
    text:string;
}




export default function MyComent({ id, autorPic, name, text }:MyComentProps){
    const [like,setLike] = useState(false);
    const[counter, setCounter]

    return(
        <div className={style.comentBox}>
            <div>
                <img 
                className={style.comentImage}
                src={autorPic}/>
            </div>
            <div className={style.right}>
                <div className={style.comentInfo}>
                <header>
                    <div> 
                        <h2>{name}</h2>
                        <p>Cerca de 2h</p>
                    </div>
                   <button className={style.delete}><img src={Trash}/></button>
                </header>
                <p className={style.coment}>{text}</p>
                </div> 
                <button
                    className={style.like}
                    onClick={()=>setLike(!like)}>
                    <img src={like ? Liked : Like} />
                    Like
                </button>
            </div>
        </div>
        
    )
}