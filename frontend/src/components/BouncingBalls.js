import React, { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import '../styles/BouncingBalls.css'; // Import loading animation styles

const BouncingBalls = () => {
    const history = useNavigate();

    useEffect(() => {
        // Simulate loading time
        const timeout = setTimeout(() => {
            // Redirect to '/modes' after loading animation completes
            history('/modes');
        }, 2300); // Adjust the timeout duration as needed

        // Cleanup function
        return () => clearTimeout(timeout);
    }, [history]);

    return (
        <div className="loading-page">
        <div className="loading-animation">
            {/* Your creative loading animation */}
            <div className="ball">
                <div className="inner-circle">
                </div>
            </div>
        </div>
    </div>
    );
};

export default BouncingBalls;
