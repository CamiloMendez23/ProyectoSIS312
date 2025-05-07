import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/categorias">Categorías</Link></li>
                <li><Link to="/proveedores">Proveedores</Link></li>
                <li><Link to="/reportes">Reportes</Link></li>
            </ul>
            <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
            <p>&copy; 2025 GymMicroServices. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
