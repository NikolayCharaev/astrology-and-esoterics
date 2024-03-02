import { useState } from 'react';
import logoDesc from '../../assets/logo.svg';
import logoTablet from '../../assets/logo-tablet.svg';
import burger from '../../assets/icons/burger.svg';
import close from '../../assets/icons/close.svg';

import './style.scss';

import { motion } from 'framer-motion';
const Header = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false);
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="header">
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

        <div className="header__logo-mobile">
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

        <div className="header__buttons">
          <button className="btn header__btn">Купить промокод</button>

          <div
            className="mobile-buttons"
            onClick={() => {
              setMobileMenuActive((prev) => !prev);
            }} style={{backgroundColor: mobileMenuActive  ? '#1e0645' : '' }}>
            <img   src={mobileMenuActive ? close : burger} alt="" />
          </div>
        </div>

        <div className={`nav__mobile ${mobileMenuActive ? 'mobile-active' : 'mobile-hidden'}`}>
          <ul className={`nav__mobile-list`}>
            <li className="nav__mobile-item">
              <a className="nav__mobile-link" href="/">
                О приложении
              </a>
            </li>

            <li className="nav__mobile-item">
              <a className="nav__mobile-link" href="/">
                Тарифы
              </a>
            </li>

            <li className="nav__mobile-item">
              <a className="nav__mobile-link" href="/">
                Вопросы и ответы
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
