import React from 'react';
import api from '../img/github_api.PNG';
import tl from '../img/tasklist.png';
import calc from '../img/calculator.png';

function Portfolio() {
    return (
        <>
        <section className="portfolio">
        <h2>Portfólio</h2>
            <div class="grid">
                <figure>
                    <a href="https://dffs-code.github.io/githubUserAPI/" target="_blank">
                        <img class="img-portfolio" src={api} alt="Github API"></img>
                        <figcaption>Github User API</figcaption>
                    </a>
                </figure>
                <figure>
                    <a href="https://dffs-code.github.io/taskListJS/" target="_blank">
                        <img class="img-portfolio" src={tl} alt="Task List"></img>
                        <figcaption>TaskList</figcaption>
                    </a>
                </figure>
                <figure>
                    <a href="https://dffs-code.github.io/Calculator/" target="_blank">
                        <img class="img-portfolio" src={calc} alt="Calculadora"></img>
                        <figcaption>Calculadora</figcaption>
                    </a>
                </figure>
                </div>
        </section>
        </>
    );
}

export default Portfolio;