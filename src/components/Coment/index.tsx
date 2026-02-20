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
    apagarComent:(id:number)=>void;
}




export default function MyComent({ id, autorPic, name, text, apagarComent }:MyComentProps){
    const [like,setLike] = useState(false);
    const[counter, setCounter] = useState(0);
    
    function handleClick(){
        setCounter((currentState) => currentState+1)
        setLike(!like)
       
    }
    function handleClickDelete(){
        apagarComent(id);
    }

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
                   <button 
                        className={style.delete}
                        onClick={handleClickDelete}>
                        <img src={Trash}/>
                    </button>
                </header>
                <p className={style.coment}>{text}</p>
                </div> 
                <button
                    className={like?style.liked:style.like}
                    onClick={handleClick}
                    disabled = {like}>
                    <img src={like ? Liked : Like} />
                    Like &bull; {counter}
                </button>
            </div>
        </div>
        
    )
}