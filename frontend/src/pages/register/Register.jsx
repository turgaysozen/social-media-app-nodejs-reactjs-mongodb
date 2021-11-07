import './register.css'
import { useRef } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

export default function Login() {
    const email = useRef()
    const username = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const history = useHistory()

    const handleRegister = async (e) => {
        e.preventDefault()
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
                await axios.post('http://localhost:8800/api/auth/register', user)
                history.push('/login')
            } catch (error) {
                alert(error)
            }
        }
    }
    return (
        <div className="login">
            <div className='loginWrapper'>
                <div className="loginLeft">
                    <h3 className='loginLogo'>HiSocial</h3>
                    <span className="loginDesc">Connect with your friends all around the world on HiSocial</span>
                </div>
                <div className="loginright">
                    <form onSubmit={handleRegister} className="registerBox">
                        <input placeholder='Email' ref={email} className="registerInput" />
                        <input placeholder='Username' ref={username} className="registerInput" />
                        <input type='password' ref={password} placeholder='Password' className="registerInput" />
                        <input type='password' ref={passwordAgain} placeholder='Password Again' className="registerInput" />
                        <button className="registerButton">Sign Up</button>
                        <Link className="loginRegisterButton" to={'/login'}>
                            <span>Login into account</span>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
