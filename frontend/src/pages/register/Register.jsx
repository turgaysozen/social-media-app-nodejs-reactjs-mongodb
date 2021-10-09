import './register.css'

export default function Login() {
    return (
        <div className="login">
            <div className='loginWrapper'>
                <div className="loginLeft">
                    <h3 className='loginLogo'>HiSocial</h3>
                    <span className="loginDesc">Connect with your friends all around the world on HiSocial</span>
                </div>
                <div className="loginright">
                    <div className="registerBox">
                        <input placeholder='Email' className="registerInput" />
                        <input placeholder='Username' className="registerInput" />
                        <input placeholder='Password' className="registerInput" />
                        <input placeholder='Password Again' className="registerInput" />
                        <button className="registerButton">Sign Up</button>
                        <button className="loginRegisterButton">Login into account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
