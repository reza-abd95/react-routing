import { Link } from "react-router-dom"
import '../styles/Product.css'


export const Product = ({id , name, image}) =>{
    return(

            <div className="card">
                <div><img src={image}/></div>
                <div>{name}</div>
                <Link className="more" to={`/products/${id}`}>More</Link>
            </div>


    )
}