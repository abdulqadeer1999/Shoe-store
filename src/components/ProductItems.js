import {useParams} from 'react-router-dom'
import Shoes from './../shoes.json'

function ProductItems() {
    const {id} = useParams();
    const shoe = Shoes[id]
    console.log(shoe)
    if (!shoe) {
        <h2>Product Not found</h2>
    }
    return (
      <div>
        <h1>Welcome to ProductItems</h1>
        <div className = "Link" >
                    <h4>{shoe.name}</h4>
                    <img src = {shoe.img} alt = "shoe pic" width = "200px" height = "300px" />
                    </div>
      </div>
    );
  }
  
  export default ProductItems;