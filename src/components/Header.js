import React from 'react';
import './Header.css'

function Header() {
    return (
        <>
        <nav className="menu">
            <ul>
				<li>
					<a href="#">
						<i className="fas fa-home"></i>
					</a>
				</li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#portfolio">Portfólio</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </>
    );
}

export default Header;