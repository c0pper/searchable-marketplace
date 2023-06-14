import React from 'react'
// import styles from './styles.module.css'
import './styles.css'
import ProductCard from '../../shared/ProductCard'

const Table = ({products}) => {
  return (
    <div>
        <div className='product_grid'>
            {products.map((product) => {
                return (
                    <ProductCard key={product._id} product={product} />
                )
                // const dateAdded = new Date(product.dateAdded).getFullYear();
                // const categories = product.category.split(',')
                // console.log(categories.length)

                // return(
                //     <div className='product_container' key={product.id}>
                //         <div>
                //             <img src={product.img} alt='product' className='product_img' />
                //         </div>

                //         <div className="product_content">
                //             <div className='title_container'>
                //                 <a href="#">
                //                         <h5 className="product_title">{product.name}</h5>
                //                 </a>
                //                 <p className='date_added'>{dateAdded}</p>
                //             </div>
                //             <div className='category_container'>
                //                 {categories.map((category, index) => (
                //                     <p key={category} className='product_category'>
                //                         {category}
                //                         {index !== categories.length - 1 && '/'}
                //                     </p>
                //                 ))}
                //             </div>
                //             <p className="product_desc">{product.description}</p>
                //             <div className="rating_stars">
                //                 {Array(Math.ceil(product.rating)).fill().map((_, index) => (
                //                     <svg
                //                     key={index}
                //                     aria-hidden="true"
                //                     className="single_star"
                //                     fill="currentColor"
                //                     viewBox="0 0 20 20"
                //                     xmlns="http://www.w3.org/2000/svg"
                //                     >
                //                     <title>Star {index + 1}</title>
                //                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                //                     </svg>
                //                 ))}
                //                 <span className="rating">{product.rating}</span>
                //             </div>

                //             <div className="price_container">
                //                 <span className="price">{product.price}€/m</span>
                //                 <a href="#" className="buy_btn">Add to cart</a>
                //             </div>
                //         </div>
                //     </div>
                // )
            })}
        </div>
    </div>
  )
}

export default Table