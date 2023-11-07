import './brands.css'
import hm from './../../img/brands/HM.png'
import obey from './../../img/brands/Obey.png'
import amazon from './../../img/brands/Amazon.png'
import lacoste from './../../img/brands/Lacoste.png'
import shopify from './../../img/brands/Shopify.png'
import levis from './../../img/brands/Levis.png'

const Brands = () => {
  return ( 
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          <li><a href="#!"><img src={hm} alt="HM" /></a></li>
          <li><a href="#!"><img src={obey} alt="Obey" /></a></li>
          <li><a href="#!"><img src={shopify} alt="Shopify" /></a></li>
          <li><a href="#!"><img src={lacoste} alt="Lacoste" /></a></li>
          <li><a href="#!"><img src={levis} alt="Leci`s" /></a></li>
          <li><a href="#!"><img src={amazon} alt="Amazon" /></a></li>
        </ul>
      </div>
    </section>
  );
}
 
export default Brands;