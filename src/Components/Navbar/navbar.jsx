import "./navbar.scss"
import Button from "../Button/button"
import Logo from "../../assets/Logo.png"

function Navbar({links}) {
    return(
    <nav>
        <ul>
            <img src={Logo} alt="" />
            {links.map((link,index)=>{
                if(index===links.length-1){
                    return <Button key={index} Text={link} Class={"btn-pri"}/>
                }
                return <li key={index}>{link}</li>
            })}
        </ul>
    </nav>
)}

export default Navbar