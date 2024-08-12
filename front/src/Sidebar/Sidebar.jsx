
import React, { useState } from 'react';
import './Sidebar.css'; // 引入样式文件
import UserAvatar from './UserAvatar/UserAvatar';
import Content from '../Content/Content';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav>
        <UserAvatar/>
        <ul>
          <li>首页</li>
          <li>关于</li>
          <li>联系我们</li>
        </ul>
      </nav>
      <Content />
    </div>
    
  );
};

export default Sidebar;