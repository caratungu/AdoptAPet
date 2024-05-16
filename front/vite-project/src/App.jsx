import { Home, MisTurnos, Login, Register, About, Schedule, AllServices, Pets} from "../src/views";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { Error, Footer, Navbar } from "./components/primary";

function App() {

  return (
    <div>
      <Navbar />
      <div className={styles.views}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/turns" element={<MisTurnos />} />
          <Route path="/turns/schedule" element={<Schedule />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
