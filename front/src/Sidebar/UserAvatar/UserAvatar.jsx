// UserAvatar.js
import React, { useState } from 'react';
import './UserAvatar.css'; // 引入样式文件
import LogIn from '../../LogIn/LogIn';

const UserAvatar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [showLogin, setShowLogin] = useState(false);



  const handleLoginSuccess = (avatarUrl) => {
    setIsLoggedIn(true);
    setAvatarUrl(avatarUrl);
    setShowLogin(false);
  }



  const handleLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className='user-profile'>  
          {isLoggedIn ? (
             <img src={avatarUrl} alt="avatar" className='avatar' />
          ) :(
            <div className="login-button" onClick={handleLogin}>
              <img src="../../../icon/登录标志.png" alt="login" className='login-icon' />
            </div> 
          )}
          {showLogin && <LogIn onLoginSuccess={handleLoginSuccess} />}
        </div>
  );
};

export default UserAvatar;
