import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import the useAuth hook

const AuthGuard = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>; // Wait for auth state to be determined

  if (!user) {
    navigate('/login'); // Redirect to login page if the user is not authenticated
    return null;
  }

  return children; // Allow access to protected routes if the user is authenticated
};

export default AuthGuard;
