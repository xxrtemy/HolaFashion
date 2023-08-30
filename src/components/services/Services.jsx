import './services.css'

import leftCardImg from '../../img/services/left.svg'
import middleCardImg from '../../img/services/middle.svg'
import rightCardImg from '../../img/services/right.svg'

function Services(){
    return(
        <section id='Services' className='services__container'>
            <h1 className='services__heading'>SERVICES</h1>
            <h2 className='services__title'>
                Hola Fashion is a High-quality Cotton Garment
            </h2>
            <div className="services__cards">
                <ul className='cards__list'>
                    <li className='cards__item left'>
                        <img src={leftCardImg} alt="LeftCardImg" />
                        <p className='left__text'>Shop for the best and latest in clothing</p>
                    </li>
                    <li className='cards__item middle'>
                        <img src={middleCardImg} alt="MiddleCardImg" />
                        <p className='middle__text'>Providing clothes for both men and women</p>
                    </li>
                    <li className='cards__item right'>
                        <img src={rightCardImg} alt="RightCardImg" />
                        <p className='right__text'>Shop for the latest and most popular fashion</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Services;