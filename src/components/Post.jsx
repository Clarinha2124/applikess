import styles from './Post.module.css';
import { Comment } from './Comment';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                    className={styles.avatar} 
                    src="https://github.com/Clarinha2124.png"
                    />
                    <p></p>
                    <div className={styles.authorInfo}>
                        <strong>Clara Cavalheiro</strong>
                        <span>@clarinhaa</span>
                    </div>
                    <p></p>
                </div>

                <p></p>
                <time title="10 de setembro às 09:44h" dateTime="2024/09/10 09:44:00">Publicado á 1h</time>
                <p></p>

            </header>
            
            <div className={styles.content}>
                <p>Oioi pessoal!!!</p>
                <p></p>
                <p>Mais uma leitura concluida!!</p>

               <p></p>

                <img src='/src/assets/mulherzinhas.jpg'></img>
                <p>
                    <a href="#">#Amoler</a>{''}
                    <a href="#">#Recomendo</a>{''}
                  
                </p>
            </div>

            <form className={styles.commentForm}>
             <strong>Deixe deu feedback</strong>

             <textarea placeholder='deixe um comentário'></textarea>


           <footer>
             <button type='submit'> Publicar </button>
             </footer>
            </form>

<div className={styles.commentList}>
<Comment/>
<Comment/> 
<Comment/> 
</div>





        </article>

    )
}