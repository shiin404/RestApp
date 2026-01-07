import React from 'react';
import styles from './PartnerProjects.module.css';

// !!! ИМПОРТ ИЗОБРАЖЕНИЯ, КАК ВЫ ПРОСИЛИ !!!
import rest_2 from "../assets/Rest 2.png";

// Создаем массив, используя импортированную переменную rest_2
const partnerBanners = [
  rest_2,
  rest_2,
  rest_2,
  rest_2,
  rest_2, // Добавим больше, чтобы был виден скролл
  rest_2,
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