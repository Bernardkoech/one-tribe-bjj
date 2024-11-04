// WhatsAppLink.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppLink = () => {
  const whatsappNumber = '+254720896434'; // Replace with the desired WhatsApp number
  const message = 'Hello!'; // Optional message to send
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        justifyContent: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        position: 'fixed',      // Make it fixed
        left: '20px',           // Adjust left positioning
        bottom: '20px',         // Adjust bottom positioning
        zIndex: '1000',         // Ensure it's above other elements
      }}
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppLink;
