import { Home, MisTurnos, Login, Register } from '../src/views';
import styles from "./App.module.css";
import { Footer, Navbar } from './components/primary';

function App() {
  const view = "login";

  return (
    <>
      <Navbar />
      {view === "home" && <Home />}
      {view === "misTurnos" && <MisTurnos />}
      {view === "login" && <Login />}
      {view === "register" && <Register />}
      <Footer />
    </>
  );
}

export default App;
