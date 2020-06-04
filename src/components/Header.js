import React from 'react';

function Header() {
    return (
        <>
        <nav class="menu">
            <ul>
				<li>
					<a href="#">
						<i class="fas fa-home"></i>
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