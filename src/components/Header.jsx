import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.siteheader}>
      <div className={styles.headercontainer}>
        <div className={styles.headerleft}>
          <button className={styles.burger}>☰</button>
        </div>
        <h1 className={styles.logo}>RestApp</h1>
        <div className={styles.headeractions}>
          <button className={styles.login}>Login</button>
          <button className={styles.app}>App</button>
        </div>
      </div>
    </header>
  )
}
