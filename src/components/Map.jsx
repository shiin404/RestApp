import { useEffect } from "react";
import styles from './Map.module.css'
export default function Map() {
  useEffect(() => {
    // Создаем скрипт SDK 2ГИС
    const script = document.createElement("script");
    script.src = "https://maps.api.2gis.ru/2.0/loader.js";
    script.async = true;

    script.onload = () => {
      if (!window.DG) return;

      DG.then(() => {
        const map = DG.map("map", {
          center: [43.238949, 76.889709], // центр Алматы
          zoom: 13
        });

        const markers = [
          { coords: [43.241, 76.927], name: "Ресторан 1" },
          { coords: [43.235, 76.885], name: "Ресторан 2" },
          { coords: [43.245, 76.890], name: "Кафе 1" }
        ];

        markers.forEach((m) => {
          DG.marker(m.coords).addTo(map).bindPopup(m.name);
        });
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <section style={{ marginTop: "24px" }}>
        <h2 style={{ marginBottom: "10px" }}>Ближайшие рестораны</h2>
        <div id="map" className={styles.maps}></div>
      </section>
    </div>
  );
}
