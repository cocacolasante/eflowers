import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.footerLinks}>
            <p className={styles.footerLink}>Facebook</p>
            <p className={styles.footerLink}>Instagram</p>
            <p className={styles.footerLink}>Twitter</p>
            <p className={styles.footerLink}>LinkedIn</p>
        </div>
    </div>
  )
}

export default Footer
