import style from "./styles.module.css"
import Logo from "../../assets/Logo.svg"


export default function Header(){
    return(
        <header className={style.header}>
            <img src={Logo}></img>
        </header>
    )
}