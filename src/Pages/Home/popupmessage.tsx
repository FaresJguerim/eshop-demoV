import React from 'react';

interface PopupMessageProps {
  message: string;
}

const PopupMessage: React.FC<PopupMessageProps> = ({ message }) => {
  return (
    <div
      style={{
        backgroundColor: '#5A6D57',
        padding: '10px',
        color: 'white',
        textAlign: 'center',
        width: '100%', // Full width
        position: 'fixed',
        top: '0', // Positioned at the top
        left: '0',
        fontWeight: '600', // Font weight: semibold
        fontFamily: 'Montserrat', // Font family: Montserrat
        letterSpacing: 'wide', // Tracking: wide
        fontSize: '0.75rem', // Font size: text-xs
      }}
    >
      {message}
    </div>
  );
};

export default PopupMessage;
