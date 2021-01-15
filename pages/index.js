import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

const Index = () => {

  const divStyle = {
    padding: '100px 0'
  };

  return (
    <div className="overflow-limiter">
      <Head>
        <title>ArtGallery - разводящая страница</title>
      </Head>
      <Header></Header>
      <main style={divStyle}>
        <div className="container">
          <h1>Страницы сайта</h1>
          <ul>
            <li>
              <Link href="/main">
                <a className="title-sm">Главная (пользователь НЕ авторизован)</a>
              </Link>
            </li>
            <li>
              <Link href="/catalog">
                <a className="title-sm">Каталог</a>
              </Link>
            </li>
            <li>
              <Link href="/product">
                <a className="title-sm" href="product.html">Страница товара</a>
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Index;
