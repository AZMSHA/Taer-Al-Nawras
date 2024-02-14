import "./button.scss"

 function Button({onClick,onHover,Class,children}) {
    return (
        <button className={Class} onClick={onClick} onMouseOver={onHover}>{children}</button>
    )
 }

 export default Button