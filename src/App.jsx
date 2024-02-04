import Home from './Pages/Home/home.jsx'
import Navbar from './Components/Navbar/navbar'
import { useState , useEffect ,createContext } from 'react';

export const GContext = createContext()

function App() {
  const [loaded,setLoaded] = useState(false)

  useEffect(() => {

    window.addEventListener('load', function () {
      setLoaded(true);
    });

    return () => {
      window.removeEventListener('load', function () {
        setLoaded(true);
      });
    };
  }, []);

  if(loaded){
    const loaderSvg = document.querySelector('#initial-loader svg');
    loaderSvg.style.width = "9rem"
    const loader = document.getElementById("initial-loader")
    loader.style.animationPlayState = "running"

    const targetElement = document.querySelector('nav ul svg');
    const targetRect = targetElement.getBoundingClientRect();

    const translateX = targetRect.left - loaderSvg.getBoundingClientRect().left;
    const translateY = targetRect.top - loaderSvg.getBoundingClientRect().top;

    Object.assign(loaderSvg.style,{
      transform: `translate(${translateX-48}px, ${translateY-48}px)`,
    })

}

  return (
      <GContext.Provider value={{loaded:loaded}}>
        <Navbar links={["Home","About us","Services","Contact us!"]}/>
        <Home/>
      </GContext.Provider>
  );
}

export default App;
