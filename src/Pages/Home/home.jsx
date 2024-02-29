import "./Home.scss";
import Hero from "./components/Hero.jsx";
import ServicesMenu from "./components/ServicesMenu.jsx";
import Reviews from "./components/Reviews.jsx";
import Steps from "./components/Steps.jsx";
import About from "../About/about.jsx";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <ServicesMenu />
      <Reviews />
      <Steps />
      <About />
    </main>
  );
}
