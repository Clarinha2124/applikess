import styles from './Sidebar.module.css';

import { PencilLine } from '@phosphor-icons/react/dist/ssr';

export function Sidebar(){
    return (
<aside className={styles.Sidebar}>
<img className={styles.cover} src="https://images.unsplash.com/photo-1567674680706-518a0c7fe495?w=300&auto=format&fit=crop&q=40&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfF84ekZIdWhSaHlvfHxlbnwwfHx8fHw%3D" alt="" />
<div className={styles.profile}>
<img className={styles.avatar} src="https:github.com/Clarinha2124.png" alt="" />





   
    <strong>Clara</strong>
   
    <span>
        Web Developer
    </span>

    </div>
    <footer>
        <a href="#"> 
        <PencilLine size={20}/>
        Editar seu perfil
        </a>
    </footer>

</aside>
    );
}