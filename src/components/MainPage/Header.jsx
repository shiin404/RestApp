import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { Profiles } from '../AllData/AllProfile'; // Убедись, что путь верный

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <header className={styles.siteheader}>
        <div className={styles.headercontainer}>
          <div className={styles.headerleft}>
            <button 
              className={`${styles.burger} ${isOpen ? styles.burgerActive : ""}`} 
              onClick={toggleMenu}
            >
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </button>
          </div>
          
          <h1 className={styles.logo}>RestApp</h1>
          
          <div className={styles.headeractions}>
            <Link to='/profile/1' onClick={() => isOpen && setIsOpen(false)} className={styles.profileLink}>
              <img src={Profiles[0].avatar} alt="Profile" className={styles.avatar} />
            </Link>
          </div>
        </div>
      </header>

      <div className={`${styles.menuOverlay} ${isOpen ? styles.menuVisible : ""}`}>
        <nav className={styles.navLinks}>
          <Link to="/" onClick={toggleMenu}>Главная</Link>
          <Link to="/restaurants" onClick={toggleMenu}>Рестораны</Link>
          <Link to="/hotels" onClick={toggleMenu}>Гостиницы</Link>
          <Link to="/flowers" onClick={toggleMenu}>Цветочные</Link>
        </nav>
      </div>
    </>
  );
}