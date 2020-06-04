import React from 'react';

function Contato() {
    return (
        <>
         <section className="contato" id="contato">
    	<h2>Contato</h2>
        <div class="grid icons">
        	<a href="http://github.com/dffs-code" target="_blank">
              	<i class="fab fa-github"></i>
          	</a>
          	<a href="http://instagram.com/_.danif" target="_blank">
				<i class="fab fa-instagram"></i>
	        </a>
	        <a href="https://www.linkedin.com/in/daniel-formigoni/" target="_blank">
				<i class="fab fa-linkedin"></i>
			</a>
          	<a href="mailto:formigoni.soares@gmail.com" target="_blank">
				<i class="fas fa-envelope"></i>
			</a>
        </div>
    </section>
        </>
    );
}

export default Contato;