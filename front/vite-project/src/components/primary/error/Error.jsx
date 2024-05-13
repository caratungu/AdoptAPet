import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Error.module.css'

const Error = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);
      navigate("/");
    }, 5000);

    return () => clearInterval(countdownInterval);
  }, [navigate]);

  return (
    <div className={styles.container} >
      <h1>Page not found</h1>
      <h2>Redirectin to home in {countdown} seconds...</h2>
    </div>
  );
};

export default Error;
