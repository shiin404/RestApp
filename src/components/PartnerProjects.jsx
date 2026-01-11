import React from 'react';
import styles from './PartnerProjects.module.css';

// !!! ИМПОРТ ИЗОБРАЖЕНИЯ, КАК ВЫ ПРОСИЛИ !!!
import banner16 from "../assets/banner16.gif";
import banner17 from "../assets/banner17.GIF";
import banner18 from "../assets/banner18.GIF";
import banner19 from "../assets/banner19.GIF";
import banner20 from "../assets/banner20.GIF";
import banner21 from "../assets/banner21.GIF";
// Создаем массив, используя импортированную переменную rest_2
const partnerBanners = [
  banner16,
  banner17,
  banner18,
  banner19,
  banner20,
  banner21,
];

function PartnerProjects() {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.page}> 
        <h2 className={styles.pagetext}>Партнёрские проекты</h2>

        <div className={styles.partnersSlider}>
          <div className={styles.partnersTrack}>
            {/* Рендеринг списка изображений */}
            {partnerBanners.map((src, index) => (
              <img 
                key={index} 
                // Используем переменную src (которая является rest_2)
                src={src} 
                alt={`Партнёрский баннер ${index + 1}`} 
                className={styles.partnerImage} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnerProjects;