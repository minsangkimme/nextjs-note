import { getProduct } from '@/service/products';
import { notFound } from 'next/navigation';
import { getProducts } from '../../../service/products';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  return {
    title: `${product?.name} 제품 페이지`,
  };
}

const ProductPage = async ({ params: { slug } }: Props) => {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return <h1>{product.name} 제품 페이지</h1>;
};

export default ProductPage;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
