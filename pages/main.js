import React, { useState, useContext } from 'react';
import Head from 'next/head';
import {AppContext} from '../context/context';
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

const MAIN_DATA = {
  head: {
    title: 'ArtGallery - Главная'
  },
  theme: 'dark',
  heroItems: [
    {
      id: 0,
      picture: '/img/hero-slide-1.jpg',
      subtitle: 'Новое на этой неделе',
      title: 'Лучшие фигуративные произведения',
      text: 'Новые оригинальные работы, выбранные нашим эспертом',
      button: 'Открыть',
    },
    {
      id: 1,
      picture: '/img/hero-slide-2.jpg',
      subtitle: 'Новое на этой неделе',
      title: 'Лучшие фигуративные произведения',
      text: 'Новые оригинальные работы, выбранные нашим эспертом',
      button: 'Открыть',
    },
    {
      id: 2,
      picture: '/img/hero-slide-1.jpg',
      subtitle: 'Новое на этой неделе',
      title: 'Лучшие фигуративные произведения',
      text: 'Новые оригинальные работы, выбранные нашим эспертом',
      button: 'Открыть',
    },
  ],
  start: {
    title: 'Не знаете с чего начать?',
    video: {
      title: 'Видеобзор нашего ресурса возможности для пользователя',
      picture: '/img/video-start.jpg',
      url: 'https://www.youtube.com/embed/h3RNElMbdUY?autoplay=1',
    },
    article: {
      title: 'Обзор нашего экспетра Элеоноры Рубинштейн-Загорской',
      picture: '/img/start-card.jpg',
      url: '#',
      category: {
        text: 'Выбор экспертов',
        url: '#'
      },
    },
  },
  styleReviewItems: [
    {
      id: 0,
      picture: '/img/style-card-1.jpg',
      url: '#',
      title: 'Современное НЮ',
      category: 'Новое изобразительное искусство',
    },
    {
      id: 0,
      picture: '/img/style-card-2.jpg',
      url: '#',
      title: 'Вдохновение Уорхолом',
      category: 'Новый Поп Арт',
    },
    {
      id: 0,
      picture: '/img/style-card-3.jpg',
      url: '#',
      title: 'Вдохновение Гансом Хофманном',
      category: 'Новый абстрактный экспрессионизм',
    },
    {
      id: 0,
      picture: '/img/style-card-4.jpg',
      url: '#',
      title: 'Современное НЮ',
      category: 'Новое изобразительное искусство',
    },
    {
      id: 0,
      picture: '/img/style-card-5.jpg',
      url: '#',
      title: 'Вдохновение Уорхолом',
      category: 'Новый абстрактный экспрессионизм',
    },
    {
      id: 0,
      picture: '/img/style-card-6.jpg',
      url: '#',
      title: 'Вдохновение Гансом Хофманном',
      category: 'Новый Поп Арт',
    },
    {
      id: 0,
      picture: '/img/style-card-1.jpg',
      url: '#',
      title: 'Современное НЮ',
      category: 'Новое изобразительное искусство',
    },
    {
      id: 0,
      picture: '/img/style-card-2.jpg',
      url: '#',
      title: 'Вдохновение Уорхолом',
      category: 'Новый Поп Арт',
    },
    {
      id: 0,
      picture: '/img/style-card-3.jpg',
      url: '#',
      title: 'Современное НЮ',
      category: 'Новый абстрактный экспрессионизм',
    },
  ],
};

const Main = () => {
  const { closeModalVideo, modalVideo } = useContext(AppContext);
  //const [modalVideo, setModalVideo] = useState(false);
  const [modalAutorize, setModalAutorize] = useState(false);
  const [modalReg, setModalReg] = useState(false);
  const [modalRes, setModalRes] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  // const openModalVideo = () => {
  //   setModalVideo(true);
  // };

  // const closeModalVideo = () => {
  //   setModalVideo(false);
  // };

  // const openModalAutorize = () => {
  //   setModalAutorize(true);
  //   setModalRes(false);
  //   setModalReg(false);
  // };

  // const closeModalAutorize = () => {
  //   setModalAutorize(false);
  // };

  // const openModalReg = () => {
  //   setModalReg(true);
  //   setModalAutorize(false);
  //   setModalRes(false);
  // };

  // const closeModalReg = () => {
  //   setModalReg(false);
  // };

  const openModalRes = () => {
    setModalRes(true);
    setModalAutorize(false);
    setModalReg(false);
  };

  const closeModalRes = () => {
    setModalRes(false);
  };

  const openModalSuccess = () => {
    setModalRes(false);
    setModalSuccess(true);
  };

  const closeModalSuccess = () => {
    setModalSuccess(false);
  };

  return (
    <div className='overflow-limiter' id='main'>
      <Head>
        <title>{MAIN_DATA.head.title}</title>
        <link
          rel='stylesheet'
        />
        <script src='https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js'></script>
      </Head>
      <Header onClick={openModalAutorize} theme={MAIN_DATA.theme} />
      <main>
        <Hero data={MAIN_DATA} />
        <Start data={MAIN_DATA.start} />
        <NewWorks />
        <StyleReview data={MAIN_DATA.styleReviewItems} />
        <News />
      </main>
      <Footer />
      <Modal
        isOpen={modalVideo}
        onRequestClose={closeModalVideo}
        className='modal__container modal__container--video'
        overlayClassName='modal__overlay'
        ariaHideApp={false}
      >
        <ModalVideo
          closeModalVideo={closeModalVideo}
          data={MAIN_DATA.start.video.url}
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
        <ModalAutorize
          openModalReg={openModalReg}
          closeModalAutorize={closeModalAutorize}
          openModalRes={openModalRes}
          modalAutorize={modalAutorize}
        />
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
        <ModalReg openModalAutorize={openModalAutorize} />
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
        <ModalRes
          openModalAutorize={openModalAutorize}
          openModalSuccess={openModalSuccess}
        />
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
        <ModalSuccess />
      </Modal>
    </div>
  );
};

export default Main;
