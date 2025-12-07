import styles from './Search.module.css';

export default function Search() {
  return (
    <section className={styles.searchSection}>
      <div className={styles.searchContainer}>

        {/* Кнопки выбора категории */}
  

        {/* Поле поиска */}
        <input
          type="text"
          placeholder="Ресторана, гостиниц, цветочных"
          className={styles.searchInput}
        />

        {/* Кнопка Найти */}
        <button className={styles.searchAction}>Найти</button>
      </div>
    </section>
  );
}
