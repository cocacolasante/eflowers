import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUsTitle}>
            <h1>About Us</h1>
        </div>
        <div className={styles.aboutUsText}>
            <p>lorem ipsem</p>
        </div>
    </div>
  )
}

export default AboutUs;
