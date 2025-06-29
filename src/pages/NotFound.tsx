import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container" style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>404</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>页面未找到</p>
      <Link 
        to="/"
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#6366f1', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '4px'
        }}
      >
        返回首页
      </Link>
    </div>
  );
};

export default NotFound;