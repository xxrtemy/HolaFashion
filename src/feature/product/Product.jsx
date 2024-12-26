import React from 'react';
import './product.css'
import ProductImg from '../../img/images/product.svg'


function Product(){
    return(
        <section id='Product' className='product__container'>
            <h1 className='product__heading'>PRODUCT</h1>
            <h2 className='product__title'>
                Hola Fashion - Newest Designers, Lowest Prices
            </h2>
            <div className='product__promo'>
                <div className='promo__card'>
                    <img className='card__img' src={ProductImg} alt="ProductImg" /> 
                    <h3 className='card__heading'>Influencers</h3>                    
                    <p className='promo__card__text'>The World&apos;s Most Famous Street Style Bloggers not only promote our brand, but they also showcase how our clothing can be incorporated into real-life street style looks. Their ability to effortlessly combine high-end designers with accessible pieces from our store has inspired countless individuals to experiment with their style and shop at our store.</p>
                </div>
                <span className='promo__text'>The World&apos;s Most Famous Street Style Bloggers</span>
            </div>
        </section>
    )
}
export default Product;