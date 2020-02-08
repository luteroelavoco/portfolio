import React from 'react';
import Inicio from "./Inicio";
import Acerca from "./Acerca";
import Resumo from "./Resumo";
import Skills from "./Skills";
import Projectos from "./Projectos";
import Blog from "./Blog";
import Contacto from "./Contacto";
import './index.css';

export default function Main (){
    return(
        <div className="main">
            <Inicio/>
            <Acerca/>
            <Resumo/>
            <Skills/>
            <Projectos/>
            <Blog/>
            <Contacto/>
        </div>
    )
}