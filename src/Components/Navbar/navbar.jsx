import "./navbar.css"

function Navbar({links}) {
    return <nav><ul>{links.map((link,index)=><li key={index}>{link}</li>)}</ul></nav>
}

export default Navbar