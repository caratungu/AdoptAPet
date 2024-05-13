import { Home, MisTurnos, Login, Register, About } from "../src/views";
import styles from "./App.module.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Error, Footer, Navbar } from "./components/primary";

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.views}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<MisTurnos />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
