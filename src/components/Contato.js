import React from 'react';
import './Contato.css'

function Contato() {
    return (
        <>
         <section className="contato" id="contato">
    	<h2>Contato</h2>
        <div className="grid icons">
        	<a href="http://github.com/dffs-code" target="_blank">
              	<i className="fab fa-github"></i>
          	</a>
          	<a href="http://instagram.com/_.danif" target="_blank">
				<i className="fab fa-instagram"></i>
	        </a>
	        <a href="https://www.linkedin.com/in/daniel-formigoni/" target="_blank">
				<i className="fab fa-linkedin"></i>
			</a>
          	<a href="mailto:formigoni.soares@gmail.com" target="_blank">
				<i className="fas fa-envelope"></i>
			</a>
        </div>
    </section>
        </>
    );
}

export default Contato;