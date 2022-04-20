import styles from './Frase.module.css'

function Frase (props) {
    
    return(
        <div className={styles.fraseContainer}>
            <span className={styles.fraseContent}>{props.children}</span>
           
        </div>
    )
}

export default Frase