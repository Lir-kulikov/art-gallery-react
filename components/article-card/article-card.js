import './article-card.scss'

const ArticleCard = () => {
  return (
    <div className="article-card start__card">
      <a className="article-card__img-link" href="#">
        <img className="article-card__img" src="img/start-card.jpg" />
      </a>
      <a className="article-card__category" href="#">Выбор экспертов</a>
      <a className="article-card__title" href="#">Обзор нашего экспетра Элеоноры Рубинштейн-Загорской</a>
    </div>
  );
};

export default ArticleCard