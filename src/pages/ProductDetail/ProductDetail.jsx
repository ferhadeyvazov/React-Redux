import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts, removeSelectedProducts } from '../../store/Actions/productActions';

import css from './ProductDetail.module.css';

function ProductDetail() {
  const product = useSelector((state) => state.product);
  const {image, title, price, category, description} = product;
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(product);


  async function fetchProductDetails() {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`);
    let data = await res.json();

    dispatch(selectedProducts(data));
  }
  useEffect(() => {
    if (id && id !== "") fetchProductDetails();
    return ()=> {
      dispatch(removeSelectedProducts());
    }

  }, [id]);

  return (
    <section className='section'>
      <div className="container">
          <div className={css.containerGrid}>
                <div className={css.image}>
                    <img src={image} alt="image" />
                </div>
                <div className={css.detail}>
                      <h1>{title}</h1>
                      <h2 className={css.price}>${price}</h2>

                      <h3 className={css.category}>{category}</h3>
                      <p className={css.info}>{description}</p>


                      <button className={css.cartButton}>Add to Cart</button>
                </div>
          </div>
      </div>
      
    </section>
  )
}

export default ProductDetail