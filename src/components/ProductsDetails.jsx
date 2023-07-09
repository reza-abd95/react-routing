import { useParams } from "react-router-dom"
import { data } from "../data/data"
import '../styles/ProductsDetails.css'



export const ProductsDetails = () =>{
    const {id} = useParams()
    const char = data.find(item => item.id == id);

    return(
        
        <div className="det-container">
            <div className="details">
                <img className="avatar" src={char.bimage}/>
                <h2>{char.name}</h2>
                <h3>Age : {char.age}</h3>
                <p>{char.details}</p>
                
            </div>
        </div>
    )
}