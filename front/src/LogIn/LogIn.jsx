import { useState } from 'react'
import './LogIn.css'
import axios from 'axios'

const LogIn = ({ onLoginSuccess }) =>  {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [Empty, setShowEmpty] = useState(false);
    const [Wrong, setShowWrong] = useState(false);

    const CheckLogin = () => {
        //console.log('Checking login');
        if (username === '' || password === '') {
            setShowWrong(false);
            setShowEmpty(true);
            return;
        }

        axios.post('http://127.0.0.1:7001/login', {
            username: username,
            password: password
        })
        .then(response => {
            if (response.username != "error") {
                setShowEmpty(false);
                setShowWrong(false);
                console.log('Login success');
                const photoname = username + '.jpg';
                console.log(photoname);
                if(photoname === "tianyi.jpg"){
                    const avatarUrl ="./picture/tianyi.jpg";
                }else if(photoname === "guwen.jpg"){
                    const avatarUrl ="./picture/guwen.jpg";
                }else if(photoname === "xuexiao.jpg"){
                    const avatarUrl ="./picture/xuexiao.jpg";
                }
                onLoginSuccess("avatarUrl")
            } else {
                setShowEmpty(false);
                setShowWrong(true);
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
            setShowEmpty(false);
            setShowWrong(true);
        });
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