import React from 'react';
import ellipse from '../../assets/ellipse.png';
import appstore from '../../assets/appstore.svg';
import google from '../../assets/google.svg';

import phoneOne from '../../assets/banner-phone/1.png';
import phoneTwo from '../../assets/banner-phone/2.png';
import phoneThree from '../../assets/banner-phone/3.png';
import phoneFour from '../../assets/banner-phone/4.png';

import { motion } from 'framer-motion';
import './style.scss';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__inner">
        <div className="banner__left">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="banner__title">
            Выберите лучший <br /> билет в мир <span>TestProject</span>!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="banner__description">
            <span>Промокоды TestProject</span> – ваш билет на VIP-места в увлекательном путешествии
            по миру астрологии и эзотерики!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="btn__wrapper">
            <button className="btn banner__btn">Купить промокод</button>
            <div className="btn__ellipse rotating-element">
              <img src={ellipse} alt="ellipse" />
            </div>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="socials ">
            <li className="socials__item">
              <a className="socials__link" href="/">
                <img className="socials__img" src={appstore} alt="appstore" />
              </a>
            </li>
            <li className="socials__item">
              <a className="socials__link" href="/">
                <img className="socials__img" src={google} alt="google" />
              </a>
            </li>
          </motion.ul>
        </div>

        <div className="banner__right">
          <motion.ul
            className="banner__poster-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}>
            <motion.li
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="banner__poster-item">
              <img className="banner__poster-img" src={phoneOne} alt="poster" />
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 90 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 }}
              className="banner__poster-item">
              <img className="banner__poster-img" src={phoneTwo} alt="poster" />
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5 }}
              className="banner__poster-item">
              <img className="banner__poster-img" src={phoneThree} alt="poster" />
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3 }}
              className="banner__poster-item">
              <img className="banner__poster-img" src={phoneFour} alt="poster" />
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
