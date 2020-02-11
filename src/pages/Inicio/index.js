import React, { useState } from 'react';
import "./index.css";
import Carrousel from "../../components/Carrousel";
import imagem from "../../assets/fundo.png";
export default function Inicio() {

    const [slades, setSlades] = useState([
        {
            id:1,
            active:true,
            src : imagem,
            title: "Titulo 1",
            description :"Uma descrição simples"
        },
        {
            id:2,
            active:false,
            src : "https://www.ab2l.org.br/wp-content/uploads/2017/11/noticias-microsoft-curso-ab2l.jpg",
            title: "Titulo 2",
            description :"Uma descrição simples"
        },
        {
            id:3,
            active:false,
            src : imagem,
            title: "Titulo 3",
            description :"Uma descrição simples"
        },
    ])
   return (
        <div className="inicio">
            <Carrousel slades={slades}/>
        </div>
    )
}