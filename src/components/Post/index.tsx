import style from './styles.module.css'
import type { PostProps } from '../../Types/Post'
import { useState } from 'react'
import MyComent from '../Coment'
import MyPic from '../assets/IMG_4150.jpeg'

export default function Post({  autorPic, name, cargo }:PostProps){
    const [coments, setComents] = useState<string[]>([])
    const [coment,setComent] = useState('')

     function handleSubmit(e){
        e.preventDefault();
        setComents([...coments, coment]);
        setComent('')
    }

     function handleChange(e){
        setComent(e.target.value);
    }
     function handleDelete(id:number) {    
        const updatedComents = coments.filter((coment,index)=>{
            return index !== id;
        })
        setComents(updatedComents)
     }
    
    return(
     <aside className={style.pub}>
        <header className={style.profilePostInfo}>
            <div className = {style.profileData}>
                <img 
                className={style.profileImage}
                src={autorPic}/>
                <div className={style.profileDataText}>
                    <h3>{name}</h3>
                    <p>{cargo}</p>
                </div>
            </div>
            <p className={style.postTime}>Publicado há 1h</p>
        </header>
        <section className={style.postText}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quidem molestiae optio, repellat unde incidunt odit modi voluptatem odio sit temporibus enim dolorum earum saepe dicta quae libero inventore exercitationem!</p>
        </section>
        <form onSubmit={handleSubmit} className={style.feedback}>
            
            <h2>Deixe seu feedback</h2>
            
            <textarea 
            className={style.input} 
            placeholder='Escreva um comentário...' 
            value={coment}
            onChange = {handleChange}
            />
            
            <button type='submit'>Comentar</button>

        </form>
        <div>
            {coments.map((coment,index) => {
                return (
                    <MyComent 
                        id = {index}
                        text= {coment}
                        name = 'Augusto'
                        autorPic={MyPic}
                        apagarComent = {handleDelete}
                    />
                )
            }
            )}
        </div>
     </aside>
    )
}
