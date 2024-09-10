import axios from 'axios';
import React, { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import '../styles/BouncingBalls.css'; // Import loading animation styles

const BouncingBalls = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const timeout = setTimeout(() => {
        navigate('/modes');
      }, 2000);
    
      return () => clearTimeout(timeout);
    }, [navigate]);
    return (
        <div className="loading-page">
            <div className="loading-animation">
                <div className="ball">
                    <div className="inner-circle"></div>
                </div>
            </div>
        </div>
    );
};

export default BouncingBalls;
