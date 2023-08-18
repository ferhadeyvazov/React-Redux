import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import css from './Product.module.css';

function Product() {
  const [basket, setBasket] = useState([]);
  function addArr(product) {
      const arr = [...basket];
      console.log(product);
      arr.map(item=>{
        if(product.id != item.id) {
          setBasket(arr(product));
          console.log(arr);
        }
      })

    }
  
  const products = useSelector((state) => state.allProducts.products);

  let renderList = products.map((product, index) => {
    const { id, title, image, price, category } = product;
    return (
      <div className={css.card} key={id}>
        <div className={css.card__image}>
          <Link to={`/product/${id}`} >
            <img src={image} alt={"cardImage" + id} />
          </Link>
        </div>
        <div className={css.card__content}>
          <h3 className={css.title}>{title}</h3>
          <h4 className={css.price}>$ {price}</h4>
          <p className={css.category}>{category}</p>
          <button
          onClick={()=>addArr(product)}
          className={css.addCartBtn}>Add to Cart</button>
        </div>
      </div>

    );
  })

  return (
    <div className={css.product__cards}>

      {renderList}
    </div>
  )
}
export default Product