import React from 'react'
import './blog.css'

import blogImg1 from '../../img/blog/blogImg1.svg'
import blogImg2 from '../../img/blog/blogImg2.svg'
import blogImg3 from '../../img/blog/blogImg3.svg'
import blogImg4 from '../../img/blog/blogImg4.svg'
import blogImg5 from '../../img/blog/blogImg5.svg'
import blogImg6 from '../../img/blog/blogImg6.svg'

function Blog(){
    return(
        <section id='Blog' className='blog__container'>
            <h1 className='blog__heading'>BLOG</h1>
            <h2 className='blog__title'>
                Hola Fashion - Newest Designers, Lowest Prices
            </h2>
            <div className="blog__cards">
                <ul className='blog__cards__list'>
                    <li className='blog__cards__item'>
                            <img src={blogImg1} alt="CardImg" />
                            <p className='card__text'>This Shirt Will Save You $40 On Your Next Online Purchase</p>
                    </li>
                    <li className='blog__cards__item'>
                            <img src={blogImg2} alt="CardImg" />
                            <p className='card__text'>The Story Behind Hola Fashion: The Cotton Movement</p>
                    </li>
                    <li className='blog__cards__item'>
                            <img src={blogImg3} alt="CardImg" />
                            <p className='card__text'>What to Wear in Madrid: 8 Outfits To Make You Look Local</p>
                    </li>
                    <li className='blog__cards__item'>
                            <img src={blogImg4} alt="CardImg" />
                            <p className='card__text'>Guide to Buying a Suit: What You Need To Know</p>
                    </li>
                    <li className='blog__cards__item'>
                            <img src={blogImg5} alt="CardImg" />
                            <p className='card__text'>Making A Social Impact Through Your Business</p>
                    </li>
                    <li className='blog__cards__item'>
                            <img src={blogImg6} alt="CardImg" />
                            <p className='card__text'>The World&apos;s Most Famous Street Style Bloggers</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Blog;