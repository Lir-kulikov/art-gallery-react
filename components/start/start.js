import ArticleCard from '../article-card';
import './start.scss'

const Start = () => {
  return (
    <section className="start">
      <div className="container">
        <h2 className="start__title title-lg">Не знаете с чего начать?</h2>
      </div>
      <div className="section-line" />
      <div className="container">
        <div className="start__row">
          <div className="video-start start__video" data-modal-open="modal-video"><img className="video-start__img" src="img/video-start.jpg" />
            <button className="video-start__btn">
              <svg className="icon icon-play ">
                <use xlinkHref="img/svg/sprite.svg#play" />
              </svg>
            </button>
            <div className="video-start__overlay">
              <h3 className="video-start__title">Видеобзор нашего ресурса возможности для пользователя</h3>
            </div>
          </div>
          <ArticleCard />
        </div>
      </div>
    </section>
  );
};

export default Start