import React, { useState } from 'react';
import "./index.css";
export default function Inicio() {
    const [interests, setInterests] = useState([
        { id: 1, name: '#perucas', active: true },
        { id: 2, name: '#unhas', active: false },
        { id: 3, name: '#makup', active: false },
        { id: 4, name: '#botique', active: false },
        { id: 5, name: '#beleza', active: false },
        { id: 6, name: '#saúde', active: false },])
    
    function selecionar(id){
        const selecionados = interests.filter(item =>{
            if(item.id == id)
                item.active = !item.active;
            return item;
        })
        setInterests(selecionados);
    }
    return (
        <div className="inicio">
            {interests.map(item =>
                <label className={item.active ? "active":""}  onClick={()=>selecionar(item.id)} >{item.name}</label>
            )}
        </div>
    )
}