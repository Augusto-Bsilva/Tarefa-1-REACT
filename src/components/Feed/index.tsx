import style from './styles.module.css'
import Post from '../Post'
export default function Feed(){
    return(
     <div className={style.feed}>
            <Post autorPic="https://as2.ftcdn.net/jpg/01/25/68/37/1000_F_125683702_KzYgSIAUqhI6wmxNL49pgG6XafE3E5pO.jpg" name="Ruan" cargo="Dev Back-end" />
             <Post autorPic="https://as2.ftcdn.net/jpg/01/25/68/37/1000_F_125683702_KzYgSIAUqhI6wmxNL49pgG6XafE3E5pO.jpg" name="Ruan" cargo="Dev Back-end" />
     </div>
    )
}