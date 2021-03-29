import Shoes from './../shoes.json'
import {Link } from 'react-router-dom'
function Product() {
    console.log(Shoes)
    return (
      <div>
        <h1>Welcome to Products</h1>
        <div className = "productContainer">
            {Object.keys(Shoes).map(keyName=> {
                const shoe = Shoes[keyName]
                return(<Link
                     key ={keyName} className = "Link" to =  {`/productitems/${keyName}`} >
                    <h4>{shoe.name}</h4>
                    <img src = {shoe.img} alt = "shoe pic" width = "200px" height = "300px" />
                    </Link>)
            })}
        </div>
      </div>
    );
  }
  
  export default Product;