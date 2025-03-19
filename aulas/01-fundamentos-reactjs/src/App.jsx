import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./Post"

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
            author="Letícia Ferreira"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies."
          />
          <Post 
            author="Amarilda Bruna"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni exercitationem cumque voluptates optio nostrum, maxime et sapiente accusamus facere minima neque porro repellendus recusandae in ratione officia incidunt, repudiandae temporibus!"
          />
        </main>
      </div>
    </>
  )
}