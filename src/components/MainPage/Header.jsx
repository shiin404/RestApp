import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { Profiles } from '../AllData/AllProfile';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navItems = [
    { name: "Главная", path: "/" },
    { name: "Рестораны", path: "/restaurants" },
    { name: "Гостиницы", path: "/hotels" },
    { name: "Цветочные", path: "/flowers" }
  ];

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
          {navItems.map((item, index) => (
            <Link 
              key={item.name}
              to={item.path} 
              onClick={toggleMenu}
              className={styles.navItem}
              style={{ transitionDelay: isOpen ? `${index * 0.1}s` : '0s' }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className={styles.menuFooter}>
          <p>© 2026 RestApp</p>
        </div>
      </div>
    </>
  );
}