import styles from "./Header.module.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className={styles.siteheader}>
      <div className={styles.headercontainer}>
        <div className={styles.headerleft}>
          <button className={styles.burger}>☰</button>
        </div>
        <h1 className={styles.logo}>RestApp</h1>
        <div className={styles.headeractions}>
          <Link to = '/profile/1'>
            <button>Profile</button>
          </Link>
        </div>
      </div>
    </header>
  )
}
