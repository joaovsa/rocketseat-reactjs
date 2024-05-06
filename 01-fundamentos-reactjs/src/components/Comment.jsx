import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/11942940?v=4" alt=''/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João de Sá</strong>
                            <time title="27 de Janeiro às 17:08" dateTime='2024-01-27 17:08:00'>Cerca de 1h atrás</time>

                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom João, parabéns!</p>

                </div>
                 
            </div>
            <footer>
            <ThumbsUp />
            Aplaudir <span>20</span>
            </footer>
        </div>
    )
}