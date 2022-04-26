import styles from './styles.module.sass'
import { SignInButton } from "../../components/SignInButton";
import { StudyUpIcon } from '../../components/StudyUpIcon';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
    const { status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if(status === 'authenticated') {
            router.push('/')
        }
    }, [status])

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