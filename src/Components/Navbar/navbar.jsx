import "./navbar.scss"
import Button from "../Button/button"
import Logo from "../../assets/Logos/LogoNoOutline.svg?react"
import { useEffect,useState } from "react"

function Navbar({links}) {
    const [scroll,setScroll] = useState(0)

    useEffect(() => {
        // Event listener function
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScroll(scrollPosition);
        };

        // Add event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return(
    <div className="bg-wrapper navbar" state={`${(scroll>300)?"opened":"closed"}`}>
        <nav >
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
    </div>
)}

export default Navbar