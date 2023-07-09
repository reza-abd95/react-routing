import { Product } from "./Product"
import { data } from "../data/data"
import '../styles/Products.css'


export const Products = () =>{

    return(
        <div>
            <div className="card-container">
                {data.map((item) => {
                return(
                    <Product key={item.id} id = {item.id} name = {item.name} age = {item.age} image = {item.image}/>
                )
                })}

            </div>
        </div>


    )
}