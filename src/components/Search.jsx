import styles from './Search.module.css';

export default function Search() {
  return (
    <section className={styles.searchSection}>
      <div className={styles.searchContainer}>

        {/* Кнопки выбора категории */}
        <div className={styles.categoryButtons}>
          <button className={styles.categoryBtn}>Ресторан</button>
          <button className={styles.categoryBtn}>Отель</button>
          <button className={styles.categoryBtn}>Цветочная</button>
        </div>

        {/* Поле поиска */}
        <input
          type="text"
          placeholder="Введите название заведения"
          className={styles.searchInput}
        />

        {/* Кнопка Найти */}
        <button className={styles.searchAction}>Найти</button>
      </div>
    </section>
  );
}
