import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <a
          href="https://www.instagram.com/motexas10"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <FaInstagram size={20} />
        </a>
        <span className="company-name">
          Elmohandis Developments
        </span>
      </div>
      <p>جميع الحقوق محفوظة | © 2026 </p>
    </footer>
  );
}