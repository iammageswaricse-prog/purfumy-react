//products component//
import one from "../assets/images/1.jpg"
import two from "../assets/images/2.jpg"
import three from "../assets/images/3.jpg"

function Products(){
  return(
    <div className='products'>
      <div className='product-list'>
        <div className='product-item'>
          <img src={one} alt='Product 1' />
          <h3>fog wood perfume extreme,eau de parfum long lasting perfume 100ml </h3>
          <p>$19.99</p>
        </div>
        <div className='product-item'>
          <img src={two} alt='Product 2' />
          <h3>fog wood perfume extreme,eau de parfum long lasting perfume 100ml </h3>
          <p>$29.99</p>
        </div>
        <div className='product-item'>
          <img src={three} alt='Product 3' />
          <h3>fog wood perfume extreme,eau de parfum long lasting perfume 100ml </h3>
          <p>$39.99</p>
        </div>
  
    </div>
      </div>
  )
}
export default Products;