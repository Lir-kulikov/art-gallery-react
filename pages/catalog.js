import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Filter from '../components/filter';
import FilterCards from '../components/filter-cards';
import Sort from '../components/sort'
import GridMasonry from '../components/grid-masonry';

const CATALOG_DATA = {
  parentClass: 'catalog',
  theme: 'light',
  items: [
    {
        id: 0,
        picture: '/img/masonry-card-1.jpg',
        tag: {
            text: 'Новинка',
            color: 'red'
        },
        title: 'Распоряжения о структуре тут длинное название картины',
        url: '/product',
        author: {
            name: 'Екатерина Александровна Преображенская',
            url: ''
        },
        size: 'Картина, 80x50 см.',
        price: 927750,
        oldPrice: 727750,
        favourite: true,
        basket: false
    },
    {
        id: 1,
        picture: '/img/masonry-card-2.jpg',
        tag: {
            text: 'Скидка',
            color: 'Green'
        },
        title: 'Распоряжения о структуре тут длинное название картины',
        url: '/productCard',
        author: {
            name: 'Екатерина Александровна Преображенская',
            url: ''
        },
        size: 'Картина, 80x60 см.',
        price: 927750,
        oldPrice: 727750,
        favourite: false,
        basket: true
    },
    {
        id: 2,
        picture: '/img/masonry-card-3.jpg',
        tag: {

        },
        title: 'Распоряжения о структуре тут длинное название картины',
        url: '/productCard',
        author: {
            name: 'Екатерина Александровна Преображенская',
            url: ''
        },
        size: 'Картина, 80x60 см.',
        price: 927750,
        oldPrice: 727750,
        favourite: false,
        basket: false
    },
    {
        id: 3,
        picture: '/img/masonry-card-4.jpg',
        tag: {
            text: 'Скидка',
            color: 'Green'
        },
        title: 'Распоряжения о структуре тут длинное название картины',
        url: '/productCard',
        author: {
            name: 'Екатерина Александровна Преображенская',
            url: ''
        },
        size: 'Картина, 80x60 см.',
        price: 927750,
        oldPrice: 727750,
        favourite: false,
        basket: false
    },
    {
        id: 4,
        picture: '/img/masonry-card-5.jpg',
        tag: {

        },
        title: 'Распоряжения о структуре тут длинное название картины',
        url: '/productCard',
        author: {
            name: 'Екатерина Александровна Преображенская',
            url: ''
        },
        size: 'Картина, 80x60 см.',
        price: 927750,
        oldPrice: 727750,
        favourite: false,
        basket: false
    },
    {
        id: 5,
        picture: '/img/masonry-card-6.jpg',
        tag: {

        },
        title: 'Распоряжения о структуре тут длинное название картины',
        url: '/productCard',
        author: {
            name: 'Екатерина Александровна Преображенская',
            url: ''
        },
        size: 'Картина, 80x60 см.',
        price: 927750,
        oldPrice: 727750,
        favourite: false,
        basket: false
    },
    {
        id: 6,
        picture: '/img/masonry-card-7.jpg',
        tag: {
            text: 'Новинка',
            color: 'red'
        },
        title: 'Распоряжения о структуре тут длинное название картины',
        url: '/productCard',
        author: {
            name: 'Екатерина Александровна Преображенская',
            url: ''
        },
        size: 'Картина, 80x60 см.',
        price: 927750,
        oldPrice: 727750,
        favourite: false,
        basket: false
    },
    {
        id: 7,
        picture: '/img/masonry-card-8.jpg',
        tag: {
            text: 'Скидка',
            color: 'Green'
        },
        title: 'Распоряжения о структуре тут длинное название картины',
        url: '/productCard',
        author: {
            name: 'Екатерина Александровна Преображенская',
            url: ''
        },
        size: 'Картина, 80x60 см.',
        price: 927750,
        oldPrice: 727750,
        favourite: false,
        basket: false
    },
]

};

const Catalog = () => {

  return (
    <div className='overflow-limiter'>
      <Head>
        <title>ArtGallery - Каталог</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js"></script>
        <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
      </Head>
      <Header theme={CATALOG_DATA.theme} />
      <main>
        <div className="catalog__top-img-wrapper">
          <div className="catalog__top-img lax" data-lax-translate-y="0 0, 500 150">
            <h2 className="catalog__title title-lg">Каталог картин</h2>
          </div>
        </div>
        <div className="breadcrumbs catalog__breadcrumbs">
          <div className="container">
            <div className="breadcrumbs__inner">
              <a className="breadcrumbs__back" href="index.html">
                <svg className="long-arrow-icon breadcrumbs__long-arrow-icon">
                  <use xlinkHref="img/svg/sprite.svg#long-arrow" /></svg>Назад</a>
              <div className="breadcrumbs__nav">
                <a className="breadcrumbs__link" href="#" /><a className="breadcrumbs__link" href="#" /><a className="breadcrumbs__link breadcrumbs__link--current" />
              </div>
            </div>
          </div>
        </div>
        <Filter />
        <FilterCards />
        <div className="catalog__product-cards">
          <div className="container">
            <Sort parentClass={CATALOG_DATA.parentClass} />
            <GridMasonry data={CATALOG_DATA} />
            <button className="catalog__product-btn btn">Показать ещё</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog