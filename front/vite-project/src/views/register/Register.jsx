import styles from './Register.module.css';
import { RegisterForm } from "../../components/primary";

const Register = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  );
};

export default Register;
