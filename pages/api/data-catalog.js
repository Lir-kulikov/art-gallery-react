const data = {
  head: {
    title: 'ArtGallery - Каталог',
  },
  theme: 'light',
  parentClass: 'catalog',
  title: 'Каталог картин',
  header: {
    logo: {
      desktop: '/img/logo.png',
      desktopDark: '/img/logo-black.png',
      mobile: '/img/AG.png',
      url: '/main',
    },
    menu: {
      main: [
        {
          name: 'Каталог',
          url: '/catalog',
        },
        {
          name: 'Художникам',
          url: '',
        },
        {
          name: 'Блог',
          url: '',
        },
      ],
      additionalName: 'Еще',
      additionalItems: [
        {
          name: 'О проекте',
          url: '',
        },
        {
          name: 'Доставка',
          url: '',
        },
        {
          name: 'Политика конфиденциальности',
          url: '',
        },
      ],
      copyright: '©  Artgallery, 2018',
    },
    counter: {
      wishlist: '10',
      basket: '20',
    },
    lang: {
      items: [
        {
          name: 'EN',
          url: '/en',
        },
      ],
      current: {
        desktop: 'RU',
        mobile: {
          name: 'Английская версия',
          url: '/en',
        },
      },
    },
  },
  breadcrumbs: {
    back: {
      name: 'Назад',
      url: '#',
    },
  },
  newWorks: {
    parentClass: 'new-works',
    title: 'Новые работы',
    sort: {
      label: 'Сортировать по',
      options: [
        { label: 'Дате добавления', value: 'Дате добавления' },
        { label: 'Цене', value: 'Цене' },
        { label: 'Популярности', value: 'Популярности' },
      ],
    },
    items: [
      {
        id: 0,
        picture: '/img/masonry-card-1.jpg',
        tag: {
          text: 'Новинка',
          color: 'red',
        },
        title: 'Распоряжения о структуре тут длинное название картины',
        url: '/product',
        author: {
          name: 'Екатерина Александровна Преображенская',
          url: '',
        },
        size: 'Картина, 80x50 см.',
        price: 927750,
        oldPrice: 727750,
        favourite: true,
        basket: false,
      },
      {
        id: 1,
        picture: '/img/masonry-card-2.jpg',
        tag: {
          text: 'Скидка',
          color: 'Green',
        },
        title: 'Распоряжения о структуре тут длинное название картины',
        url: '/productCard',
        author: {
          name: 'Екатерина Александровна Преображенская',
          url: '',
        },
        size: 'Картина, 80x60 см.',
        price: 927750,
        oldPrice: 727750,
        favourite: false,
        basket: true,
      },
      {
        id: 2,
        picture: '/img/masonry-card-3.jpg',
        tag: {},
        title: 'Распоряжения о структуре тут длинное название картины',
        url: '/productCard',
        author: {
          name: 'Екатерина Александровна Преображенская',
          url: '',
        },
        size: 'Картина, 80x60 см.',
        price: 927750,
        oldPrice: 727750,
        favourite: false,
        basket: false,
      },
      {
        id: 3,
        picture: '/img/masonry-card-4.jpg',
        tag: {
          text: 'Скидка',
          color: 'Green',
        },
        title: 'Распоряжения о структуре тут длинное название картины',
        url: '/productCard',
        author: {
          name: 'Екатерина Александровна Преображенская',
          url: '',
        },
        size: 'Картина, 80x60 см.',
        price: 927750,
        oldPrice: 727750,
        favourite: false,
        basket: false,
      },
      {
        id: 4,
        picture: '/img/masonry-card-5.jpg',
        tag: {},
        title: 'Распоряжения о структуре тут длинное название картины',
        url: '/productCard',
        author: {
          name: 'Екатерина Александровна Преображенская',
          url: '',
        },
        size: 'Картина, 80x60 см.',
        price: 927750,
        oldPrice: 727750,
        favourite: false,
        basket: false,
      },
      {
        id: 5,
        picture: '/img/masonry-card-6.jpg',
        tag: {},
        title: 'Распоряжения о структуре тут длинное название картины',
        url: '/productCard',
        author: {
          name: 'Екатерина Александровна Преображенская',
          url: '',
        },
        size: 'Картина, 80x60 см.',
        price: 927750,
        oldPrice: 727750,
        favourite: false,
        basket: false,
      },
      {
        id: 6,
        picture: '/img/masonry-card-7.jpg',
        tag: {
          text: 'Новинка',
          color: 'red',
        },
        title: 'Распоряжения о структуре тут длинное название картины',
        url: '/productCard',
        author: {
          name: 'Екатерина Александровна Преображенская',
          url: '',
        },
        size: 'Картина, 80x60 см.',
        price: 927750,
        oldPrice: 727750,
        favourite: false,
        basket: false,
      },
      {
        id: 7,
        picture: '/img/masonry-card-8.jpg',
        tag: {
          text: 'Скидка',
          color: 'Green',
        },
        title: 'Распоряжения о структуре тут длинное название картины',
        url: '/productCard',
        author: {
          name: 'Екатерина Александровна Преображенская',
          url: '',
        },
        size: 'Картина, 80x60 см.',
        price: 927750,
        oldPrice: 727750,
        favourite: false,
        basket: false,
      },
    ],
    button: 'Смотреть все',
  },
  footer: {
    about: {
      title: 'Об Artgallery',
      items: [
        {
          name: 'О проекте',
          url: '#',
        },
        {
          name: 'Блог',
          url: '#',
        },
        {
          name: 'Авторы',
          url: '#',
        },
      ],
    },
    buyers: {
      title: 'Покупателям',
      items: [
        {
          name: 'Доставка',
          url: '#',
        },
        {
          name: 'Оплата',
          url: '#',
        },
        {
          name: 'Возврат',
          url: '#',
        },
      ],
    },
    catalog: {
      title: 'Каталог',
      items: [
        {
          name: 'Картины',
          url: '#',
        },
        {
          name: 'Коллажи',
          url: '#',
        },
        {
          name: 'Иллюстрации',
          url: '#',
        },
      ],
    },
    contacts: {
      title: 'Контакты',
      items: [
        {
          name: '+ 7 (999) 123-123-44',
          url: 'tel:+799912312344',
          icon: '/img/svg/sprite.svg#phone',
          iconClass: 'phone-icon',
        },
        {
          name: 'info@domainname.ru',
          url: 'mailto:info@domainname.ru',
          icon: '/img/svg/sprite.svg#mail',
          iconClass: 'mail-icon',
        },
        {
          name: 'г. Москва, \n Преснесенская наб., 12',
          url: '',
          icon: '/img/svg/sprite.svg#location',
          iconClass: 'location-icon',
        },
      ],
    },
    social: {
      title: 'Мы в социальных сетях:',
      items: [
        {
          icon: '/img/svg/sprite.svg#vk',
          url: '#',
        },
        {
          icon: '/img/svg/sprite.svg#facebook',
          url: '#',
        },
        {
          icon: '/img/svg/sprite.svg#odnoklassniki',
          url: '#',
        },
        {
          icon: '/img/svg/sprite.svg#instagram',
          url: '#',
        },
      ],
    },
    payment: {
      title: 'Платёжные системы',
      picture: '/img/pay-systems.png',
    },
    under: {
      policy: {
        name: 'Политика конфендициальности',
        url: '#',
      },
      terms: {
        name: 'Условия и положения',
        url: '#',
      },
      copyright: {
        name: '© Artgallery, 2018',
      },
      developer: {
        name: 'Cайт создан ',
        url: '#',
        picture: '/img/hawking-brothers.png',
        mobileName: 'Hawking Brothers',
      },
    },
  },
  modalAutorize: {
    title: 'Авторизация',
    registration: {
      button: 'Регистрация',
      question: 'Еще нет аккаунта?',
    },
    reset: {
      button: 'Восстановить',
      question: 'Забыли пароль?'
    },
    social: {
      title: 'С помощью социальных сетей',
      items: [
        {
          url: '#',
          icon: '',
          name: '',
        },
        {
          url: '#',
          icon: '',
          name: '',
        },
        {
          url: '#',
          icon: '',
          name: '',
        },
        {
          url: '#',
          icon: '',
          name: '',
        },
      ]
    },
    fields: ''
  },
  modalReg: {

  },
  modalRes: {

  }
};

export default function handler(req, res) {
  res.status(200).json(data);
}
