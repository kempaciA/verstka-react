
import "./Promo.css";
import promoImg from "./../../img/images/header-img.jpg";


const Promo = () => {
  return (
    <section className="promo">
        <div className="container">
            <div className="promo__content">
                <div className="promo-text">


                    <div className="promo__title">  
                    <span className="highlight">
                        <span>
                        LETS
                        </span>
                        </span>

                    EXPLORE

                    <span className="highlight highlight--yellow">
                            <span>UNIQUE</span>
                         </span>
                   
                    
                    CLOTHES.
                    </div>
                    <div className="promo__desc">  Live for influential and innovative fashion!</div>
                    <div className="promo__btn-wrapper">
                        <a href="" className="promo__btn">
                            Shop now 
                        </a>
                    </div>
                  
                </div>
                <div className="promo__img">
                    <img src={promoImg} alt="Promo" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Promo