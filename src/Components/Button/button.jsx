import "./button.scss"

 function Button({Text,onClick,onHover,Class}) {
    return (
        <button className={Class} onClick={onClick} onMouseOver={onHover}>{Text}</button>
    )
 }

 export default Button