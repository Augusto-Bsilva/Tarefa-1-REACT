import Header from './components/Header'
import ProfileCard from './components/Profile'
import './App.css'
import Feed from './components/Feed'
 export default function App() {
  return (
    <div>
        <Header />
        <main>
          <ProfileCard />
          <Feed />
        </main>
    </div>
  )
}


