import { Home, MisTurnos } from '../src/views';
import styles from "./App.module.css";
import { Footer, Navbar } from './components/primary';

function App() {
  const view = "home";

  return (
    <>
      <Navbar />
      {view === "home" && <Home />}
      {view === "misTurnos" && <MisTurnos />}
      <Footer />
    </>
  );
}

export default App;
