import React from 'react'
import './blog.css'
import { List } from '@components/List'
import { BLOG } from './consts'

function Blog(){
    return(
        <section id='Blog' className='blog__container'>
            <h1 className='blog__heading'>BLOG</h1>
            <h2 className='blog__title'>
                Hola Fashion - Newest Designers, Lowest Prices
            </h2>
            <div className="blog__cards">
                <List.Unordered listItems={BLOG.LIST} />
            </div>
        </section>
    )
}

export default Blog;