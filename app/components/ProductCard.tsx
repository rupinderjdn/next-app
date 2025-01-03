import React from 'react'
import AddToCart from './AddToCart';
import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <h1 className=' '>Product Card</h1>
      {/* <button onClick={() => console.log('Add to Cart')}>Add to Cart</button> */}
      <AddToCart />
    </div>
  )
}

export default ProductCard
 