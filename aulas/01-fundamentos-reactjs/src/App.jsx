import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            avatar="https://cdn.pixabay.com/photo/2023/03/31/05/52/avatar-7889246_1280.jpg"
            author="Jane Cooper"
            role="Dev Front-End"
            content=""
          />
        </main>
      </div>
    </>
  )
}