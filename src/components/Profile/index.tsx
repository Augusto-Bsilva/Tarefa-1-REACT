import style from './styles.module.css'
import Background from '../assets/Bat.gif'
import ProfilePic from '../assets/IMG_4150.jpeg'

export default function ProfileCard(){
    return(
        <aside className={style.profile}>
            <img 
                className={style.cover}
                src={Background}
            />
            <div className={style.profileInfo}>
                <img 
                    className={style.profilePic}
                    src={ProfilePic}
                />
                <h2>Augusto Brigida</h2>
                <p>Dev Front-end</p>
            </div>
        </aside>
    )
}