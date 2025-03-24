import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://cdn.pixabay.com/photo/2023/03/31/05/52/avatar-7889246_1280.jpg',
      name: 'Jane Cooper',
      role: 'Dev Front-End'
    },
    content: [
      { type: 'paragraph', value: 'Fala galeraa 👋' },
      { type: 'paragraph', value: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', value: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-03-24 11:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_1280.jpg',
      name: 'Bryan Jacobi',
      role: 'Dev Back-End'
    },
    content: [
      { type: 'paragraph', value: 'Fala galeraa 👋' },
      { type: 'paragraph', value: 'Acabei de subir mais um projeto no meu portifólio. Ignite Posts. :)' },
      { type: 'link', value: 'bryan.dev' },
    ],
    publishedAt: new Date('2025-03-22 10:30:00')
  }
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}