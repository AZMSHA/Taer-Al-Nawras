import './App.scss';
import Home from './Pages/Home/home.jsx'
import Navbar from './Components/Navbar/navbar'

function App() {
  return (
    <>
      <Navbar links={["Home","About us","Services","Contact us!"]}/>
      <Home/>
    </>
  );
}

export default App;
