import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.avatar}>
                    <Avatar src={props.avatar} hasBorder />
                    <div className={styles.author}>
                        <strong>{props.author}</strong>
                        <span>{props.role}</span>
                    </div>
                </div>
                <time title="Publicado às onze horas" dateTime="2025-03-20 11:00:00">
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                {/* <p>{props.content}</p> */}
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <hr />

            <form className={styles.feedback}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário" />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}