import { LoginForm } from '../../components/primary';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.container}>
           <LoginForm /> 
        </div>
    )
}

export default Login;