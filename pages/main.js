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