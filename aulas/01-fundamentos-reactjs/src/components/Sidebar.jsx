import { Avatar } from './Avatar'
import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <img
        className={styles.cover}
        src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
        alt="Cover"
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/74362290?v=4" hasBorder />
        <strong>Rafael Mattei</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}