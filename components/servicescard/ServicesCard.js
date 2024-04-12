import React from 'react';
import Image from "next/image";
import styles from './ServicesCard.module.css'; // Ensure the path to your CSS module is correct

const ServicesCard = ({name, description, price, imageurl}) => {
  return (
    <div className={styles.card}>
        <h2>{name}</h2>
        <Image src={imageurl} alt='services card' height={150} width={100} />
        <p>{description}</p>
        <p>{price}</p>
    </div>
  )
}

export default ServicesCard;
