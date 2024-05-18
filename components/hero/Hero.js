import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <div className={styles.hero} >
        <div className={styles.title}>
            <h1>Luxe Celebrations</h1>
        </div>
        <div>
            <button className={styles.button} >Request Information</button>
        </div>
    </div>
  )
}

export default Hero