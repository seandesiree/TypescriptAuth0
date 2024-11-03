import React from 'react';


const SessionStorageManager: React.FC = () => {
  const saveToken = (token: string): void => {
    try {
      sessionStorage.setItem('jwtToken', token);
    } catch (error) {
      console.error('Failed to save JWT token to sessionStorage:', error);
    }
  };

  const getToken = (): string | null => {
    try {
      return sessionStorage.getItem('jwtToken');
    } catch (error) {
      console.error('Failed to retrieve JWT token from sessionStorage:', error);
      return null;
    }
  };

  const removeToken = (): void => {
    try {
      sessionStorage.removeItem('jwtToken');
    } catch (error) {
      console.error('Failed to remove JWT token from sessionStorage:', error);
    }
  };

  return null; 
};

export default SessionStorageManager;
