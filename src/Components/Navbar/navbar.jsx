import "./navbar.scss"
import Button from "../Button/button"
import Logo from "../../assets/Logos/LogoNoOutline.svg?react"

function Navbar({links}) {
    return(
    <nav>
        <ul>
            <Logo/>
            {links.map((link,index)=>{
                if(index===links.length-1){
                    return <Button key={index} Class={"btn-pri"}>{link}</Button>
                }
                return <li key={index}>{link}</li>
            })}
        </ul>
    </nav>
)}

export default Navbar