import { LoginForm } from '../../components/primary';
import { ContextLogin } from '../../components/secondary';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.container}>
           <ContextLogin />
           <LoginForm /> 
        </div>
    )
}

export default Login;