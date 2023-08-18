import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom';
import css from './Product.module.css';

function Product() {
  const products = useSelector((state) => state.allProducts.products);
  
  let renderList = products.map((product)=>{
    const {id, title, image, price, category} = product;
    return (
      <Link to={`/product/${id}`} key={id}>
          <div className={css.card} >
            <div className={css.card__image}>
              <img src={image} alt={"cardImage"+id} />
            </div>
            <div className={css.card__content}>
              <h3 className={css.title}>{title}</h3>
              <h4 className={css.price}>$ {price}</h4>
              <p className={css.category}>{category}</p>
              <button className={css.addCartBtn}>Add to Cart</button>
            </div>
          </div>

      </Link>
    );
  })

  return(
      <div className={css.product__cards}>
        
      {renderList}
      </div>
  )
}
export default Product