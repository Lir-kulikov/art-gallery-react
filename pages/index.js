import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

const Index = ({ data }) => {

  const divStyle = {
    padding: '100px 0'
  };

  return (
    <div className="overflow-limiter">
      <Head>
        <title>ArtGallery - разводящая страница</title>
      </Head>
      <Header data={data.header} theme={data.theme}></Header>
      <main style={divStyle}>
        <div className="container">
          <h1>Страницы сайта</h1>
          <ul>
            <li>
              <Link href="/main">
                <a className="title-sm" href="/main">Главная (пользователь НЕ авторизован)</a>
              </Link>
            </li>
            <li>
              <Link href="/catalog">
                <a className="title-sm" href="/catalog">Каталог</a>
              </Link>
            </li>
            <li>
              <Link href="/product">
                <a className="title-sm" href="/product">Страница товара</a>
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer data={data.footer}></Footer>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/data-index`);
  const data = await res.json();
  return {
    props: { data },
  };
}

export default Index;
