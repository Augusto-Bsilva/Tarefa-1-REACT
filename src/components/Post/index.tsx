import style from './styles.module.css'
import type { PostProps } from '../../Types/Post'

export default function Post({ autorPic,name,cargo }:PostProps){
    return(
     <div className={style.pub}>
        <header>
            <div>
                <img
                src={autorPic}/>
                <div>
                    <h3>{name}</h3>
                    <p>{cargo}</p>
                </div>
            </div>
            <p>Publicado há 1h</p>
        </header>
        <section>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quidem molestiae optio, repellat unde incidunt odit modi voluptatem odio sit temporibus enim dolorum earum saepe dicta quae libero inventore exercitationem!</p>
        </section>
        <form>
            <h2>Deixe seu feedbakc</h2>
            <textarea />
            <button type='submit'>Publicar</button>
        </form>
     </div>
    )
}