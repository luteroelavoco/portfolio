import React from 'react';
import Inicio from "./Inicio";
import Acerca from "./Acerca";
import Resumo from "./Resumo";
import Skills from "./Skills";
import Projectos from "./Projectos";
import Blog from "./Blog";
import Contacto from "./Contacto";

export default function Main (){
    return(
        <>
            <Inicio/>
            <Acerca/>
            <Resumo/>
            <Skills/>
            <Projectos/>
            <Blog/>
            <Contacto/>
        </>
    )
}