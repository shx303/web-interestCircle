import { useState } from 'react'
import './LogIn.css'

const LogIn = ({ onLoginSuccess }) =>  {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [Empty, setShowEmpty] = useState(false);
    const [Wrong, setShowWrong] = useState(false);

    const CheckLogin = () => {
        if (username === 'admin' && password === '123') {
            setShowEmpty(false);
            setShowWrong(false);
            console.log('Login success');
            const avatarUrl = "./picture/用户1.jpg"
            onLoginSuccess(avatarUrl)
        } else if (username === '' || password === '') {
            setShowWrong(false);
            setShowEmpty(true);
        } else {
            setShowEmpty(false);
            setShowWrong(true);
        }
    }

    return (
        <>
            <div className="logIn-header">  
                <h1>Welcome</h1>
                <div className="logIn-container">
                    <div className="logIn-form">
                        <label>Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {Empty && <p style={{ color: 'red' }}>用户名或密码不能为空</p>}
                        {Wrong && <p style={{ color: 'red' }}>用户名或密码错误</p>}
                        <button onClick={CheckLogin}>Log In</button>    
                    </div>
                </div>
            </div>
        </>
    )
}
export default LogIn