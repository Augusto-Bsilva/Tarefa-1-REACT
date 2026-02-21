import style from './styles.module.css'
import type { PostProps } from '../../Types/Post'
import { useState } from 'react'
import MyComent from '../Coment'
import MyPic from '../../assets/IMG_4150.jpeg'
import type Coment from '../../Types/Coment'

export default function Post({  autorPic, name, cargo, comentsProntos=[] }:PostProps){
    const [coments, setComents] = useState<Coment[]>(comentsProntos)
    const [coment,setComent] = useState<string>('')

    
    function handleSubmit(e){
        e.preventDefault();
        
        const novoComent:Coment={
            id: Math.random(),
            name:'Augusto',
            text: coment,
            autorPic:MyPic
        }
        
        setComents([...coments, novoComent]);
        setComent('')
    }

    function handleChange(e){
        setComent(e.target.value);
    }
     
    function handleDelete(id:number) {    
        const updatedComents = coments.filter(novoComent=>novoComent.id!==id)
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
            required
            />
            
            <button type='submit'>Comentar</button>

        </form>
        <div>
            {coments.map((coment) => {
                return (
                    <MyComent 
                        id = {coment.id}
                        key = {coment.id}
                        text= {coment.text}
                        name = {coment.name}
                        autorPic={coment.autorPic}
                        apagarComent = {handleDelete}
                    />
                )
            }
            )}
        </div>
     </aside>
    )
}
