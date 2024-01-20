import './App.css';
import Home from './Pages/Home/'
import Navbar from './Components/Navbar/navbar'

function App() {
  return (
    <>
      <Navbar links={["Home","About us","Services"]}/>
      <Home/>
    </>
  );
}

export default App;
