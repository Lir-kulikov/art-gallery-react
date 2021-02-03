import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Filter from '../components/filter';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import '../components/product/product.scss';
import ProductCard from '../components/product-card';
import SimilarProducts from '../components/similar-products';
import Breadcrumbs from '../components/breadcrumbs';

SwiperCore.use([Navigation]);

const Product = ({ data }) => {

  return (
    <div className='overflow-limiter'>
      <Header theme={data.theme} data={data.header} />
      <main>
        <Breadcrumbs data={data.breadcrumbs} />
        <ProductCard data={data.productCard} />
        <SimilarProducts data={data.similarProducts} />
      </main>
      <Footer data={data.footer} />
    </div>
  );
};

export default Product;

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/data-product`);
  const data = await res.json();
  return {
    props: { data },
  };
}
