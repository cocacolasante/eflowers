import ServicesCard from "../servicescard/ServicesCard";
import logo from "../../public/luxe celebrations logo.jpeg";
import styles from './Services.module.css'; // Make sure this is the correct path to your CSS file

const Services = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.servicesHeader}>
            <h1>Services</h1>
        </div>
        <div className={styles.servicesContainer}>
            <ServicesCard name={"tier 1"} description={"entry level service"} price={"1000$"} imageurl={logo} />
            <ServicesCard name={"tier 2"} description={"Mid tier level service"} price={"1000$"} imageurl={logo} />
            <ServicesCard name={"tier 3"} description={"Most Popular service"} price={"1000$"} imageurl={logo} />
        </div>
    </div>
  )
}

export default Services;
