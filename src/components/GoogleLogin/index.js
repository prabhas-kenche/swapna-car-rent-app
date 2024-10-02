import React from 'react';
import { auth, googleProvider } from '../../firebaseConfig'; // Adjust the path as needed
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            console.log('User signed in successfully');
            navigate('/'); // Redirect to home or dashboard after successful login
        } catch (error) {
            console.error('Error signing in with Google: ', error);
        }
    };

    return (
        <div className="google-login-container">
            <h2>Login with Google</h2>
            <button onClick={handleGoogleLogin}>Sign in with Google</button>
        </div>
    );
};

export default GoogleLogin;
