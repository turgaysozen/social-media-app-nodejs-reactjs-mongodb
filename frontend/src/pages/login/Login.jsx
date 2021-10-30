import './login.css'
import { useContext, useRef } from 'react'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import { CircularProgress } from '@mui/material'

export default function Login() {
    const email = useRef()
    const password = useRef()
    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const handleLogin = (e) => {
        loginCall({ email: email.current.value, password: password.current.value }, dispatch)
        e.preventDefault()
    }
    return (
        <div className="login">
            <div className='loginWrapper'>
                <div className="loginLeft">
                    <h3 className='loginLogo'>HiSocial</h3>
                    <span className="loginDesc">Connect with your friends all around the world on HiSocial</span>
                </div>
                <div className="loginright">
                    <form onSubmit={handleLogin} className="loginBox">
                        <input type='email' required ref={email} placeholder='Email' className="loginInput" />
                        <input type='password' required ref={password} placeholder='Password' className="loginInput" />
                        <button className="loginButton" disabled={isFetching}>{isFetching ? <CircularProgress color="inherit" /> : 'Log In'}</button>
                        <span className="loginForgot">Forgot Password ?</span>
                        <button className="loginRegisterButton" disabled={isFetching}>{isFetching ? <CircularProgress color="inherit" /> : 'Create a new account'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
