import React from 'react';
import logoDesc from '../../assets/logo.svg';
import logoTablet from '../../assets/logo-tablet.svg'
import './style.scss';

import { motion } from 'framer-motion';
const Header = () => {
  return (
    <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{delay: .2}} className="header">
      <div className="header__inner">
        <div className="header__logo-desctop">
          <a href="/">
            <img src={logoDesc} alt="logo" />
          </a>
        </div>

        <div className="header__logo-tablet">
          <a href="/">
            <img src={logoTablet} alt="logo" />
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

        <button className="btn header__btn">Купить промокод</button>
      </div>
    </motion.header>
  );
};

export default Header;
