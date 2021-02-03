import Link from 'next/link';

import './breadcrumbs.scss';

const Breadcrumbs = ({ data, parentClass }) => {

  return (
    <div className={`breadcrumbs ${parentClass}__breadcrumbs`}>
      <div className='container'>
        <div className='breadcrumbs__inner'>
          <Link href={data.back.url}>
            <a className='breadcrumbs__back' href={data.back.url}>
              <svg className='long-arrow-icon breadcrumbs__long-arrow-icon'>
                <use xlinkHref='img/svg/sprite.svg#long-arrow' />
              </svg>
              {data.back.name}
            </a>
          </Link>
          {data.title && (
            <div className='breadcrumbs__nav'>
              <Link href={data.links[0].url}>
                <a className='breadcrumbs__link' href={data.links[0].url}>
                  {data.links[0].name}
                </a>
              </Link>
              <Link href={data.links[1].url}>
                <a className='breadcrumbs__link' href={data.links[1].url}>
                  {data.links[1].name}
                </a>
              </Link>
              <a className='breadcrumbs__link breadcrumbs__link--current'>
                {data.title}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
