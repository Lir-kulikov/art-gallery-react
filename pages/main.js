import React, { useState, useContext } from 'react';
import Head from 'next/head';
import { AppContext } from '../context/context';
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Start from '../components/start';
import NewWorks from '../components/new-works';
import StyleReview from '../components/style-review';
import News from '../components/news';
import Modal from 'react-modal';
import ModalAutorize from '../components/modal-autorize';
import ModalReg from '../components/modal-reg';
import ModalRes from '../components/modal-res';
import ModalSuccess from '../components/modal-success';
import ModalVideo from '../components/modal-video';

import '../components/modal/modal.scss';

// const data = {
//   head: {
//     title: 'ArtGallery - Главная',
//   },
//   theme: 'dark',
//   heroItems: [
//     {
//       id: 0,
//       picture: '/img/hero-slide-1.jpg',
//       subtitle: 'Новое на этой неделе',
//       title: 'Лучшие фигуративные произведения',
//       text: 'Новые оригинальные работы, выбранные нашим эспертом',
//       button: 'Открыть',
//     },
//     {
//       id: 1,
//       picture: '/img/hero-slide-2.jpg',
//       subtitle: 'Новое на этой неделе',
//       title: 'Лучшие фигуративные произведения',
//       text: 'Новые оригинальные работы, выбранные нашим эспертом',
//       button: 'Открыть',
//     },
//     {
//       id: 2,
//       picture: '/img/hero-slide-1.jpg',
//       subtitle: 'Новое на этой неделе',
//       title: 'Лучшие фигуративные произведения',
//       text: 'Новые оригинальные работы, выбранные нашим эспертом',
//       button: 'Открыть',
//     },
//   ],
//   start: {
//     title: 'Не знаете с чего начать?',
//     video: {
//       title: 'Видеобзор нашего ресурса возможности для пользователя',
//       picture: '/img/video-start.jpg',
//       url: 'https://www.youtube.com/embed/h3RNElMbdUY?autoplay=1',
//     },
//     article: {
//       title: 'Обзор нашего экспетра Элеоноры Рубинштейн-Загорской',
//       picture: '/img/start-card.jpg',
//       url: '#',
//       category: {
//         text: 'Выбор экспертов',
//         url: '#',
//       },
//     },
//   },
//   styleReviewItems: [
//     {
//       id: 0,
//       picture: '/img/style-card-1.jpg',
//       url: '#',
//       title: 'Современное НЮ',
//       category: 'Новое изобразительное искусство',
//     },
//     {
//       id: 0,
//       picture: '/img/style-card-2.jpg',
//       url: '#',
//       title: 'Вдохновение Уорхолом',
//       category: 'Новый Поп Арт',
//     },
//     {
//       id: 0,
//       picture: '/img/style-card-3.jpg',
//       url: '#',
//       title: 'Вдохновение Гансом Хофманном',
//       category: 'Новый абстрактный экспрессионизм',
//     },
//     {
//       id: 0,
//       picture: '/img/style-card-4.jpg',
//       url: '#',
//       title: 'Современное НЮ',
//       category: 'Новое изобразительное искусство',
//     },
//     {
//       id: 0,
//       picture: '/img/style-card-5.jpg',
//       url: '#',
//       title: 'Вдохновение Уорхолом',
//       category: 'Новый абстрактный экспрессионизм',
//     },
//     {
//       id: 0,
//       picture: '/img/style-card-6.jpg',
//       url: '#',
//       title: 'Вдохновение Гансом Хофманном',
//       category: 'Новый Поп Арт',
//     },
//     {
//       id: 0,
//       picture: '/img/style-card-1.jpg',
//       url: '#',
//       title: 'Современное НЮ',
//       category: 'Новое изобразительное искусство',
//     },
//     {
//       id: 0,
//       picture: '/img/style-card-2.jpg',
//       url: '#',
//       title: 'Вдохновение Уорхолом',
//       category: 'Новый Поп Арт',
//     },
//     {
//       id: 0,
//       picture: '/img/style-card-3.jpg',
//       url: '#',
//       title: 'Современное НЮ',
//       category: 'Новый абстрактный экспрессионизм',
//     },
//   ],
// };

const Main = ({ data }) => {
  const {
    modalVideo,
    closeModalVideo,
    
    modalReg,
    closeModalReg,

    modalRes,
    closeModalRes,

    modalAutorize,
    closeModalAutorize,

    modalSuccess,
    closeModalSuccess
  } = useContext(AppContext);

  return (
    <div className='overflow-limiter' id='main'>
      <Head>
        <title>{data.head.title}</title>
        <link rel='stylesheet' />
        <script src='https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js'></script>
      </Head>
      <Header theme={data.theme} data={data.header} />
      <main>
        <Hero data={data} />
        <Start data={data.start} />
        <NewWorks data={data.newWorks} />
        <StyleReview data={data.styleReview} />
        <News data={data.news} />
      </main>
      <Footer data={data.footer} />
      <Modal
        isOpen={modalVideo}
        onRequestClose={closeModalVideo}
        className='modal__container modal__container--video'
        overlayClassName='modal__overlay'
        ariaHideApp={false}
      >
        <ModalVideo
          data={data.start.video.url}
        />
      </Modal>
      <Modal
        isOpen={modalAutorize}
        onRequestClose={closeModalAutorize}
        className='modal__container'
        overlayClassName='modal__overlay'
        ariaHideApp={false}
      >
        <button
          className='modal__close'
          type='button'
          onClick={closeModalAutorize}
        />
        <ModalAutorize data={data.modalAutorize} />
      </Modal>
      <Modal
        isOpen={modalReg}
        onRequestClose={closeModalReg}
        className='modal__container'
        overlayClassName='modal__overlay'
        ariaHideApp={false}
      >
        <button
          className='modal__close'
          type='button'
          onClick={closeModalReg}
        />
        <ModalReg data={data.modalReg} />
      </Modal>
      <Modal
        isOpen={modalRes}
        onRequestClose={closeModalRes}
        className='modal__container'
        overlayClassName='modal__overlay'
        ariaHideApp={false}
      >
        <button
          className='modal__close'
          type='button'
          onClick={closeModalRes}
        />
        <ModalRes data={data.modalRes} />
      </Modal>
      <Modal
        isOpen={modalSuccess}
        onRequestClose={closeModalSuccess}
        className='modal__container'
        overlayClassName='modal__overlay'
        ariaHideApp={false}
      >
        <button
          className='modal__close'
          type='button'
          onClick={closeModalSuccess}
        />
        <ModalSuccess data={data.modalSuccess} />
      </Modal>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/data-main`);
  const data = await res.json();
  return {
    props: { data },
  };
}

export default Main;
