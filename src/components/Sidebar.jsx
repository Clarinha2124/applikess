import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
<aside className={styles.Sidebar}>
<img className={styles.cover} src="https://images.unsplash.com/photo-1567674680706-518a0c7fe495?w=300&auto=format&fit=crop&q=40&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfF84ekZIdWhSaHlvfHxlbnwwfHx8fHw%3D" alt="" />
<div className={styles.profile}>
    <strong>Clara</strong>
    <br />
    <span>
        Web Developer
    </span>
    </div>
    <footer>
        <a href="#"> Editar seu perfil</a>
    </footer>

</aside>
    );
}