import React, { useState } from 'react';
import "./index.css";
import Carrousel from "../../components/Carrousel";
import imagem from "../../assets/imagem1.png";
import imagem2 from "../../assets/imagem2.png";
export default function Inicio() {

    const [slades, setSlades] = useState([
        {
            id:1,
            active:true,
            src : imagem2,
            title: "Titulo 1",
            description :"Uma descrição simples"
        },
        {
            id:2,
            active:false,
            src : imagem,
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