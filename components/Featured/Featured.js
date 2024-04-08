import styles from "../Featured/Featured.module.css"
import ProductCard from "../productcard/ProductCard"
import logo from "../../public/luxe celebrations logo.jpeg"

const Featured = () => {
  return (
    <div className={styles.featuredContainer}> {/* Updated this line */}
        <ProductCard title="Product 1" description="this is a short description of the product" imagesrc={logo} />
        <ProductCard title="Product 1" description="this is a short description of the product" imagesrc={logo} />
        <ProductCard title="Product 1" description="this is a short description of the product" imagesrc={logo} />
    </div>
  )
}

export default Featured
