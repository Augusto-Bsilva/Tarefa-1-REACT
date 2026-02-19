import Header from './components/Header'
import ProfileCard from './components/Profile'
import style from './App.module.css'
import Feed from './components/Feed'
 export default function App() {
  return (
    <div className={style.divBackground}>
        <Header />
        <main className={style.main}>
          <ProfileCard />
          <Feed />
        </main>
    </div>
  )
}


