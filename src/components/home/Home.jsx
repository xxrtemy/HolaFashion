import './home.css'
import homeImg from '../../img/images/home.jpg'

function Home() {
    
    return(
        <section id='Home' className='home__container'>
            <>
                <img src={homeImg} alt="homeImg" className='home__img'/>
            </>
            <div className="home__text">
                <h2 className='text__title'>The one-stop solution for your clothing needs</h2>
                <p className='text__info'>All you need to find the perfect piece of clothing is at Hola Fashion. We offer clothes from top brands</p>
                <form method='post' className='text__form'>
                    <input className='form__input' type="email" placeholder='Email' size="30" />
                    <button className='form__btn'>SHOP NOW</button>
                </form>
            </div>
        </section>

    )
}
export default Home;
