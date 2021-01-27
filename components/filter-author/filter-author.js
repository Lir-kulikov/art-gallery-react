import Select from 'react-select'

import './Filter-author.scss'


const FILTER_AUTHOR_DATA = {
  selectLabel: {
    mobile: 'Начните вводить имя или фамилию',
    desktop: 'Начните вводить имя или фамилию автора'
  },
  options: [
    {
      label: 'А',
      options: [ 
        { label: "Абулафия Крайнова", value: "Абулафия Крайнова" },
        { label: "Арменинов Тримедул", value: "Арменинов Тримедул" },
        { label: "Асадуллин Нефедов", value: "Асадуллин Нефедов" },
        { label: "Абулафия Крайнова", value: "Абулафия Крайнова" },
      ]
    },
    {
      label: 'Б',
      options: [ 
        { label: "Бабурин Константин", value: "Бабурин Константин" },
        { label: "Бабуркин Вениамин", value: "Бабуркин Вениамин" },
        { label: "Бердюгин Бетюг", value: "Бердюгин Бетюг" },
        { label: "Бенвенист Трамп", value: "Бенвенист Трамп" },
      ]
    },
    {
      label: 'В',
      options: [ 
        { label: "Вабурин Константин", value: "Вабурин Константин" },
        { label: "Вабуркин Вениамин", value: "Вабуркин Вениамин" },
        { label: "Вердюгин Бетюг", value: "Вердюгин Бетюг" },
        { label: "Венвенист Трамп", value: "Венвенист Трамп" },
      ]
    }
  ]
}


const FilterAuthor = () => {

  return (
    <div className="filter__author filter__tab-body">
      <div className="filter__tab-body-inner">
        <div className="filter__author-select-wrapper">
          <span className="filter__author-text">{FILTER_AUTHOR_DATA.selectLabel.desktop}</span>
          <Select
            options={FILTER_AUTHOR_DATA.options}
            className='filter-author'
            classNamePrefix='filter-author'
            menuIsOpen={true}
            isMulti
            isSearchable
            isClearable={false}
          />
        </div>
        <div className="filter__author-autocomplete js-autocomplete" />
      </div>
    </div>
  );
};

export default FilterAuthor