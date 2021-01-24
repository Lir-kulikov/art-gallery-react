import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Start from '../components/start'
import NewWorks from '../components/new-works'
import StyleReview from '../components/style-review'
import News from '../components/news'
import Modal from 'react-modal';
import ModalAutorize from '../components/modal-autorize'

import '../components/modal/modal.scss'

//Modal.setAppElement('#main');


const MAIN_DATA = {
  theme: 'dark',
  heroItems: [
    {
      id: 0,
      picture: '/img/hero-slide-1.jpg',
      subtitle: 'Новое на этой неделе',
      title: 'Лучшие фигуративные произведения',
      text: 'Новые оригинальные работы, выбранные нашим эспертом',
      button: 'Открыть'
    },
    {
      id: 1,
      picture: '/img/hero-slide-2.jpg',
      subtitle: 'Новое на этой неделе',
      title: 'Лучшие фигуративные произведения',
      text: 'Новые оригинальные работы, выбранные нашим эспертом',
      button: 'Открыть'
    },
    {
      id: 2,
      picture: '/img/hero-slide-1.jpg',
      subtitle: 'Новое на этой неделе',
      title: 'Лучшие фигуративные произведения',
      text: 'Новые оригинальные работы, выбранные нашим эспертом',
      button: 'Открыть'
    },
  ],
  styleReviewItems: [
    {
      id: 0,
      picture: '/img/style-card-1.jpg',
      url: '#',
      title: 'Современное НЮ',
      category: 'Новое изобразительное искусство'
    },
    {
      id: 0,
      picture: '/img/style-card-2.jpg',
      url: '#',
      title: 'Вдохновение Уорхолом',
      category: 'Новый Поп Арт'
    },
    {
      id: 0,
      picture: '/img/style-card-3.jpg',
      url: '#',
      title: 'Вдохновение Гансом Хофманном',
      category: 'Новый абстрактный экспрессионизм'
    },
    {
      id: 0,
      picture: '/img/style-card-4.jpg',
      url: '#',
      title: 'Современное НЮ',
      category: 'Новое изобразительное искусство'
    },
    {
      id: 0,
      picture: '/img/style-card-5.jpg',
      url: '#',
      title: 'Вдохновение Уорхолом',
      category: 'Новый абстрактный экспрессионизм'
    },
    {
      id: 0,
      picture: '/img/style-card-6.jpg',
      url: '#',
      title: 'Вдохновение Гансом Хофманном',
      category: 'Новый Поп Арт'
    },
    {
      id: 0,
      picture: '/img/style-card-1.jpg',
      url: '#',
      title: 'Современное НЮ',
      category: 'Новое изобразительное искусство'
    },
    {
      id: 0,
      picture: '/img/style-card-2.jpg',
      url: '#',
      title: 'Вдохновение Уорхолом',
      category: 'Новый Поп Арт'
    },
    {
      id: 0,
      picture: '/img/style-card-3.jpg',
      url: '#',
      title: 'Современное НЮ',
      category: 'Новый абстрактный экспрессионизм'
    }
  ]
}

const Main = () => {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='overflow-limiter' id='main'>
      <Head>
      <title>ArtGallery - Главная</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css"
      />
      <script src="https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js"></script>
      <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
      </Head>
      <Header onClick={openModal} theme={MAIN_DATA.theme} />
      <main>
        <Hero data={MAIN_DATA} />
        <Start />
        <NewWorks />
        <StyleReview data={MAIN_DATA.styleReviewItems}/>
        <News />
      </main>
      <Footer />
      <button className='btn' onClick={openModal}>Кнопка</button>
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal__container"
        overlayClassName="modal__overlay"
      >
        <button className="modal__close" type="button" onClick={closeModal}/>
        <ModalAutorize />
      </Modal>
    </div>
  );
};

export default Main