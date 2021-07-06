import styles from './styles.module.scss';
export function Navbar(){
    return(
        <div className={styles.navb}>
            <h1>{'{Andre Sousa}'}</h1>
            <nav>
                <a href="">Portfolio</a>
                <a href="">Conteúdo</a>
                <a href="">Contato</a>
            </nav>
        </div>
    )
}