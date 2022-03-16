import styles from './Frase.module.css'

function Frase (props) {
    
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>{props.children}</p>
        </div>
    )
}

export default Frase