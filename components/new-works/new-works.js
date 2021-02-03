import React, {Component} from 'react'
import MasonryCard from '../masonry-card/masonry-card';
import MasonryFixedCard from "../masonry-fixed-card";
import GridMasonry from '../grid-masonry';
import Sort from '../sort'

import './new-works.scss'

// const data = {
//   parentClass: 'new-works',
//   title: '',
//     sort: {

//     },
//     static: {

//     },
//     items: [
//       {
//           id: 0,
//           picture: '/img/masonry-card-1.jpg',
//           tag: {
//               text: 'Новинка',
//               color: 'red'
//           },
//           title: 'Распоряжения о структуре тут длинное название картины',
//           url: '/product',
//           author: {
//               name: 'Екатерина Александровна Преображенская',
//               url: ''
//           },
//           size: 'Картина, 80x50 см.',
//           price: 927750,
//           oldPrice: 727750,
//           favourite: true,
//           basket: false
//       },
//       {
//           id: 1,
//           picture: '/img/masonry-card-2.jpg',
//           tag: {
//               text: 'Скидка',
//               color: 'Green'
//           },
//           title: 'Распоряжения о структуре тут длинное название картины',
//           url: '/productCard',
//           author: {
//               name: 'Екатерина Александровна Преображенская',
//               url: ''
//           },
//           size: 'Картина, 80x60 см.',
//           price: 927750,
//           oldPrice: 727750,
//           favourite: false,
//           basket: true
//       },
//       {
//           id: 2,
//           picture: '/img/masonry-card-3.jpg',
//           tag: {

//           },
//           title: 'Распоряжения о структуре тут длинное название картины',
//           url: '/productCard',
//           author: {
//               name: 'Екатерина Александровна Преображенская',
//               url: ''
//           },
//           size: 'Картина, 80x60 см.',
//           price: 927750,
//           oldPrice: 727750,
//           favourite: false,
//           basket: false
//       },
//       {
//           id: 3,
//           picture: '/img/masonry-card-4.jpg',
//           tag: {
//               text: 'Скидка',
//               color: 'Green'
//           },
//           title: 'Распоряжения о структуре тут длинное название картины',
//           url: '/productCard',
//           author: {
//               name: 'Екатерина Александровна Преображенская',
//               url: ''
//           },
//           size: 'Картина, 80x60 см.',
//           price: 927750,
//           oldPrice: 727750,
//           favourite: false,
//           basket: false
//       },
//       {
//           id: 4,
//           picture: '/img/masonry-card-5.jpg',
//           tag: {

//           },
//           title: 'Распоряжения о структуре тут длинное название картины',
//           url: '/productCard',
//           author: {
//               name: 'Екатерина Александровна Преображенская',
//               url: ''
//           },
//           size: 'Картина, 80x60 см.',
//           price: 927750,
//           oldPrice: 727750,
//           favourite: false,
//           basket: false
//       },
//       {
//           id: 5,
//           picture: '/img/masonry-card-6.jpg',
//           tag: {
 
//           },
//           title: 'Распоряжения о структуре тут длинное название картины',
//           url: '/productCard',
//           author: {
//               name: 'Екатерина Александровна Преображенская',
//               url: ''
//           },
//           size: 'Картина, 80x60 см.',
//           price: 927750,
//           oldPrice: 727750,
//           favourite: false,
//           basket: false
//       },
//       {
//           id: 6,
//           picture: '/img/masonry-card-7.jpg',
//           tag: {
//               text: 'Новинка',
//               color: 'red'
//           },
//           title: 'Распоряжения о структуре тут длинное название картины',
//           url: '/productCard',
//           author: {
//               name: 'Екатерина Александровна Преображенская',
//               url: ''
//           },
//           size: 'Картина, 80x60 см.',
//           price: 927750,
//           oldPrice: 727750,
//           favourite: false,
//           basket: false
//       },
//       {
//           id: 7,
//           picture: '/img/masonry-card-8.jpg',
//           tag: {
//               text: 'Скидка',
//               color: 'Green'
//           },
//           title: 'Распоряжения о структуре тут длинное название картины',
//           url: '/productCard',
//           author: {
//               name: 'Екатерина Александровна Преображенская',
//               url: ''
//           },
//           size: 'Картина, 80x60 см.',
//           price: 927750,
//           oldPrice: 727750,
//           favourite: false,
//           basket: false
//       },

//   ]
// }

class NewWorks extends Component {

  constructor(props) {
    super(props);

    this.grid = React.createRef();
    this.msnry = false;
  }

  componentDidMount() {
    this.msnry = new Masonry( this.grid.current, {
      itemSelector: '.js-grid-item',
      columnWidth: '.js-sizer',
      gutter: '.js-gutter',
      horizontalOrder: true,
      percentPosition: true
    });
  }

  render() {

    const { data } = this.props;

    return (
      <section className="new-works">
        <div className="container new-works__wrapper">
          <h2 className="new-works__title title-lg">{data.title}</h2>
          <Sort parentClass={data.parentClass} data={data.sort} />
        </div>
        <div className="section-line new-works__section-line" />
        <div className="container">
          <GridMasonry data={data} />
          <button className="new-works__btn btn">{data.button}</button>
        </div>
      </section>
    );
  }
  
}

export default NewWorks