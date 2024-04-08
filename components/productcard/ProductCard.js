import Link from "next/link"
import styles from "../productcard/ProductCard.module.css"
import Image from "next/image"

const ProductCard = ({title, imagesrc,description}) => {
  return (
    <div>
        <h2>{title}</h2>
        <Image src={imagesrc} height={200} width={125} alt="product" ></Image>
        <p>{description}</p>
        <Link href={"/order"} >Order Now</Link>
    </div>
  )
}

export default ProductCard