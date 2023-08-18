import React from 'react'
import Catalog from '../../components/Catalog/Catalog';

import css from './shop.module.css';

function shop() {
  return (
    <main className='main'>
      <div className="container">

        <Catalog />

      </div>
    </main>
  )
}

export default shop