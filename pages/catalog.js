import { Parallax } from 'react-parallax';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Filter from '../components/filter';
import FilterCards from '../components/filter-cards';
import Sort from '../components/sort';
import GridMasonry from '../components/grid-masonry';
import Breadcrumbs from '../components/breadcrumbs';

const Catalog = ({ data }) => {
  return (
    <div className='overflow-limiter'>
      <Head>
        <title>{data.head.title}</title>
        <link rel='stylesheet' />
        <script src='https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js'></script>
      </Head>
      <Header theme={data.theme} data={data.header} />
      <main>
        <Parallax className='catalog__top-img-wrapper' bgImage={'/img/top-catalog.png'} strength={50} blur={{ min: -20, max: 20 }}>
          <div className='catalog__top-img'>
            <h2 className='catalog__title title-lg'>{data.title}</h2>
          </div>
        </Parallax>
        <Breadcrumbs data={data.breadcrumbs} parentClass={data.parentClass} />
        <Filter data={data.filter} />
        <FilterCards data={data.filterCards} />
        <div className='catalog__product-cards'>
          <div className='container'>
            <Sort
              parentClass={data.parentClass}
              data={data.sort}
            />
            <GridMasonry data={data.productCards} />
            <button className='catalog__product-btn btn'>{data.productCards.showBtn}</button>
          </div>
        </div>
      </main>
      <Footer data={data.footer} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/data-catalog`);
  const data = await res.json();
  return {
    props: { data },
  };
}

export default Catalog;
