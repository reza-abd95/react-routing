import '../styles/Home.css'
import { Link } from "react-router-dom"


export const Home = () =>{
    return(
        <div className='home'>

            <div className="slider">
                <h1 className='title'>Enter to the Spider Verse</h1>
                <Link className='enter' to="/products" > Enter</Link>
            </div>

        </div>
    )
}