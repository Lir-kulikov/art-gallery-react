import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Start from '../components/start'
import NewWorks from '../components/new-works'
import StyleReview from '../components/style-review'
import News from '../components/news'

const Main = () => {
  return (
    <div className='overflow-limiter'>
      <Head>
      <title>ArtGallery - Главная</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css"
      />
      <script src="https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js"></script>
      <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
      </Head>
      <Header />
      <main>
        <Hero />
        <Start />
        <NewWorks />
        <StyleReview />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Main