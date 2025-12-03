import styles from './Search.module.css'
export default function Search(){
    return(
        <section className={styles.searchsection}>
            <div className={styles.searchcontainer}>
                <div className={styles.searchleft}>
                <span className={styles.searchlabel}>Поиск</span>
                <span className={styles.searchplaceholder} >ресторана, гостиниц, цветочных магазинов</span>
                </div>
                <div className={styles.searchaction}>Найти</div>
            </div>
        </section>
    )
}