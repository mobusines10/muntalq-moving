import React from "react";
import { FaWhatsapp } from "react-icons/fa"; 

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/966566946256"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <div className="whatsapp-content">
        <FaWhatsapp size={28} /> {/* أيقونة الواتساب */}
        
      </div>
    </a>
  );
}