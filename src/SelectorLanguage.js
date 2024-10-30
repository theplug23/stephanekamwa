import React from 'react'
import i18n from './i18n'
import "./assets/sass/style.scss"
import "./assets/sass/SelectorLanguage.scss"
import francais from './assets/img/fr.png'
import anglais from './assets/img/en.png'
import allemand from './assets/img/de.png'
import { useTranslation } from 'react-i18next'

const languages = [
  {
    name: 'Français',
    img: francais,
    lng: 'fr'
  },
  {
    name: 'English',
    img: anglais,
    lng: 'en'
  },
  {
    name: 'Deutsch',
    img: allemand,
    lng: 'de'
  },
]

export default function SelectorLanguage() {
  const { t } = useTranslation("common")
  
  function clickLanguage(lng) {
    i18n.changeLanguage(lng);
  }

  return (
    <div className='select-language-container'>
      <ul className='list-languages'>
        {languages.map((language, i) => (
          <li onClick={() => clickLanguage(language.lng)}>
            <img src={language.img} />
            <p>{language.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}