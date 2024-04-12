import styles from "./CallToAction.module.css"

const CallToAction = () => {
  return (
    <div className={styles.callToActionContainer}>
        <h2>Need Help Planning?</h2>
        <button className={styles.callToActionButton}>Request a quote</button>
    </div>
  )
}

export default CallToAction
