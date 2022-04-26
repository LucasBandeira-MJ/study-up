import styles from './styles.module.sass'
import { SignInButton } from "../../components/SignInButton";
import { StudyUpIcon } from '../../components/StudyUpIcon';

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>

                <h1>
                    studyUp
                </h1> 

                <strong>Welcome!</strong>
                <p>
                    Let's study till the <span>Next Level</span>
                </p>
                <SignInButton />
            </div>
        </div>
    )
}

export default Login;