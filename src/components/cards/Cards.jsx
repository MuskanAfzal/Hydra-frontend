import React from "react";
import styles from "./Cards.module.css";

const cardsData = [
  {
    title: "SIMULATION",
    description:
      "Vitae sapien pellentesque habitant morbi nunc. Viverrra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
    buttonText: "TRY IT NOW",
    image: "/images/2.jpg", // Replace with actual image path
  },
  {
    title: "EDUCATION",
    description:
      "Vitae sapien pellentesque habitant morbi nunc. Viverrra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
    buttonText: "TRY IT NOW",
    image: "/images/3.jpg", // Replace with actual image path
  },
  {
    title: "SELF-CARE",
    description:
      "Vitae sapien pellentesque habitant morbi nunc. Viverrra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
    buttonText: "TRY IT NOW",
    image: "/images/4.jpeg", // Replace with actual image path
  },
  {
    title: "OUTDOOR",
    description:
      "Vitae sapien pellentesque habitant morbi nunc. Viverrra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
    buttonText: "TRY IT NOW",
    image: "/images/1.jpg", // Replace with actual image path
  },
];

const Cards = () => {
  return (
    <div className={styles.cardsContainer}>
      {cardsData.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.imageWrapper}>
            <img src={card.image} alt={card.title} />
          </div>
          <h3 className={styles.title}>{card.title}</h3>
          <p className={styles.description}>{card.description}</p>
          <button className={styles.button}>{card.buttonText}</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
