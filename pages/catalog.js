import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Filter from '../components/filter';
import FilterCards from '../components/filter-cards';
import Sort from '../components/sort';
import GridMasonry from '../components/grid-masonry';
import Breadcrumbs from '../components/breadcrumbs';

const CATALOG_DATA = {
  parentClass: 'catalog',
  theme: 'light',
  items: [
    {
      id: 0,
      picture: '/img/masonry-card-1.jpg',
      tag: {
        text: 'Новинка',
        color: 'red',
      },
      title: 'Распоряжения о структуре тут длинное название картины',
      url: '/product',
      author: {
        name: 'Екатерина Александровна Преображенская',
        url: '',
      },
      size: 'Картина, 80x50 см.',
      price: 927750,
      oldPrice: 727750,
      favourite: true,
      basket: false,
    },
    {
      id: 1,
      picture: '/img/masonry-card-2.jpg',
      tag: {
        text: 'Скидка',
        color: 'Green',
      },
      title: 'Распоряжения о структуре тут длинное название картины',
      url: '/productCard',
      author: {
        name: 'Екатерина Александровна Преображенская',
        url: '',
      },
      size: 'Картина, 80x60 см.',
      price: 927750,
      oldPrice: 727750,
      favourite: false,
      basket: true,
    },
    {
      id: 2,
      picture: '/img/masonry-card-3.jpg',
      tag: {},
      title: 'Распоряжения о структуре тут длинное название картины',
      url: '/productCard',
      author: {
        name: 'Екатерина Александровна Преображенская',
        url: '',
      },
      size: 'Картина, 80x60 см.',
      price: 927750,
      oldPrice: 727750,
      favourite: false,
      basket: false,
    },
    {
      id: 3,
      picture: '/img/masonry-card-4.jpg',
      tag: {
        text: 'Скидка',
        color: 'Green',
      },
      title: 'Распоряжения о структуре тут длинное название картины',
      url: '/productCard',
      author: {
        name: 'Екатерина Александровна Преображенская',
        url: '',
      },
      size: 'Картина, 80x60 см.',
      price: 927750,
      oldPrice: 727750,
      favourite: false,
      basket: false,
    },
    {
      id: 4,
      picture: '/img/masonry-card-5.jpg',
      tag: {},
      title: 'Распоряжения о структуре тут длинное название картины',
      url: '/productCard',
      author: {
        name: 'Екатерина Александровна Преображенская',
        url: '',
      },
      size: 'Картина, 80x60 см.',
      price: 927750,
      oldPrice: 727750,
      favourite: false,
      basket: false,
    },
    {
      id: 5,
      picture: '/img/masonry-card-6.jpg',
      tag: {},
      title: 'Распоряжения о структуре тут длинное название картины',
      url: '/productCard',
      author: {
        name: 'Екатерина Александровна Преображенская',
        url: '',
      },
      size: 'Картина, 80x60 см.',
      price: 927750,
      oldPrice: 727750,
      favourite: false,
      basket: false,
    },
    {
      id: 6,
      picture: '/img/masonry-card-7.jpg',
      tag: {
        text: 'Новинка',
        color: 'red',
      },
      title: 'Распоряжения о структуре тут длинное название картины',
      url: '/productCard',
      author: {
        name: 'Екатерина Александровна Преображенская',
        url: '',
      },
      size: 'Картина, 80x60 см.',
      price: 927750,
      oldPrice: 727750,
      favourite: false,
      basket: false,
    },
    {
      id: 7,
      picture: '/img/masonry-card-8.jpg',
      tag: {
        text: 'Скидка',
        color: 'Green',
      },
      title: 'Распоряжения о структуре тут длинное название картины',
      url: '/productCard',
      author: {
        name: 'Екатерина Александровна Преображенская',
        url: '',
      },
      size: 'Картина, 80x60 см.',
      price: 927750,
      oldPrice: 727750,
      favourite: false,
      basket: false,
    },
  ],
};

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
        <div className='catalog__top-img-wrapper'>
          <div className='catalog__top-img'>
            <h2 className='catalog__title title-lg'>{data.title}</h2>
          </div>
        </div>
        <Breadcrumbs data={data.breadcrumbs} parentClass={data.parentClass} />
        <Filter />
        <FilterCards />
        <div className='catalog__product-cards'>
          <div className='container'>
            <Sort
              parentClass={CATALOG_DATA.parentClass}
              data={data.newWorks.sort}
            />
            <GridMasonry data={CATALOG_DATA} />
            <button className='catalog__product-btn btn'>Показать ещё</button>
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
