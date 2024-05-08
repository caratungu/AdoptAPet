import Carrusel from "../components/secondary/Carrusel";
import { Navbar, Footer } from '../components/primary'

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>HOME</h1>
      <Carrusel />
      <Footer />
    </div>
  );
};

export default Home;
