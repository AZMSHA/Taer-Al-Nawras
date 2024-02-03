import './App.scss';
import Home from './Pages/Home/home.jsx'
import Navbar from './Components/Navbar/navbar'
import Loading from './Components/Loading/loading.jsx';

function App() {
  return (
    <>
      <Loading></Loading>
      <Navbar links={["Home","About us","Services","Contact us!"]}/>
      <Home/>
    </>
  );
}

export default App;
