import "./button.scss"
import { useState } from 'react';

 function Button({onClick,onHover,Class,children}) {
  const [pressed, setPressed] = useState(false);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setPressed(true);
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      setPressed(false);
    }
  };

    return (
        <button className={Class + (pressed ? ' pressed' : '')} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} onClick={onClick} onMouseOver={onHover}>{children}</button>
    )
 }

 export default Button
