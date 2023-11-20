import Link from "next/link";
import { getProducts } from "../../service/products";
import styles from "./products.module.css";
import MeowArticle from "@/components/MeowArticle";
import clothes from "../../../public/images/clothes.jpg";
import Image from "next/image";

export const metadata = {
  title: "제품 소개 페이지",
  description: "멋진 제품을 소개합니다",
};

// export const revalidate = 3;

const Products = async () => {
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Image src={clothes} alt="clothes" />
      <MeowArticle />
    </>
  );
};

export default Products;
