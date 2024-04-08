import Image from "next/image";
import styles from "./Navbar.module.css"
import logo from "../../public/luxe_celebrations_logo-removebg-preview.png"
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={`${styles.navContainer}`}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          
          <li className={styles.navItem}><Link  href={"/"}>Home</Link></li>
          <li className={styles.navItem}><Link  href={"/about"}>About Us</Link></li>
          <Image src={logo} height={150} width={150} alt="logo" />
          <li className={styles.navItem}><Link  href={"/services"}>Services</Link></li>
          <li className={styles.navItem}><Link  href={"/contactus"}>Contact Us</Link></li>
          <li className={styles.navItem}><Link  href={"/order"}>Order Now</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar