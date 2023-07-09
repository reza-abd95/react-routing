import { NavLink } from "react-router-dom"
import '../styles/Header.css'

export const Header = () =>{
    return(
        <div className="header">
            <div className="logo"></div>
            <ul className="nav">
                <li>            
                <NavLink  to="/" style={{ textDecoration: "none"}} > Home</NavLink>
                </li>
                <li >            
                <NavLink to="/products" style={{ textDecoration: "none"}} > Characters</NavLink>
                </li>
                <li >            
                <NavLink to="/about" style={{ textDecoration: "none"}} > About</NavLink>
                </li>
                <li >            
                <NavLink to="/contact" style={{ textDecoration: "none"}} > Contact</NavLink>
                </li>

            </ul>
        </div>

    )
}