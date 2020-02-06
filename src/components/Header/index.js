import React from 'react';
import "./index.css";

export default function Headers() {

    return (
        <div className="Header">
            <strong> CIENTISTA1</strong>
            <ul>
                <li className ="active"> <a>Inicio</a> </li>
                <li><a>Acerca</a></li>
                <li><a>Resumo</a></li>
                <li><a>Skills</a></li>
                <li><a>Projectos</a></li>
                <li><a>Meu Blog</a></li>
                <li><a>Contacto</a></li>
            </ul>
        </div>
    )
};