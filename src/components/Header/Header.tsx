import React from 'react';
import logoDesc from '../../assets/logo.svg';
import './style.scss';
const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="">
          <a href="/">
            <img src={logoDesc} alt="logo" />
          </a>
        </div>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="/">
                О приложении
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="/">
                Тарифы
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="/">
                Вопросы и ответы
              </a>
            </li>
          </ul>
        </nav>


        <button className='btn header__btn'>Купить промокод</button>
      </div>
    </header>
  );
};

export default Header;
