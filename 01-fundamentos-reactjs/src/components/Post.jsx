import styles from './Post.module.css';
import { Comment } from './Comment';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src= "https://avatars.githubusercontent.com/u/11942940?v=4"/> 
                    <div className={styles.authorInfo}>
                        <strong>João Vitor de Sá</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="27 de Janeiro às 17:08" dateTime='2024-01-27 17:08:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Oi, eu sou um bom programador, mas eu vou serei excelente!</p>
                <p>Para mais informações, fale comigo ou acesse meu <a href='https://medium.com/@joovitordes/'>Medium</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário'/>

                <footer><button type='submit'>Publicar</button></footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}