import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteIcon from '@mui/icons-material/Favorite';

import css from './Header.module.css';
function Header() {
  return (
    <div className='header'>
        <div className="container">
        <div className={css.header__content}>
          <h2 className={css.header__logo}>Logo</h2>
          <ul className={css.header__icons}>
            <li className={css.link}>
              <FavoriteIcon className={css.link__heart} />
            </li>
            <li className={css.link}>
              <LocalMallIcon className={css.link__basket} />
              <span className={css.link__count}>0</span>
            </li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Header