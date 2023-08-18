import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../store/Actions/productActions.js';

import Product from '../Product/Product';
import css from './Catalog.module.css';


function Catalog() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const datas = await response.json();
    console.log(datas);
    dispatch(setProducts(datas));
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products: ", products);


  return (
    <div className={css.grid}>
      <h2>Catalog</h2>
      <Product />
    </div>
  )
}

export default Catalog