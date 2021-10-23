import './login.css'

export default function Login() {
    return (
        <div className="login">
            <div className='loginWrapper'>
                <div className="loginLeft">
                    <h3 className='loginLogo'>HiSocial</h3>
                    <span className="loginDesc">Connect with your friends all around the world on HiSocial</span>
                </div>
                <div className="loginright">
                    <div className="loginBox">
                        <input placeholder='Email' className="loginInput" />
                        <input type='password' placeholder='Password' className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password ?</span>
                        <button className="loginRegisterButton">Create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
