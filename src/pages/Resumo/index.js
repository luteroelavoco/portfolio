import React from 'react';
import Card from "../../components/CardResume";
import "./index.css";
export default function Resumo() {
    return (
        <div className="resumo" >
            <div data-aos="fade-up" data-aos-duration="2000" className="title">
                <strong> Resumo</strong>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className="backtitle">
                <strong >Resumo</strong>
            </div>
            <p data-aos="fade-up" data-aos-duration="2000">Sonhos sem disciplina produzem pessoas frustradas, que nunca transformam seus sonhos em realidade, e disciplina sem sonhos produz servos, pessoas que executam ordens, que fazem tudo automaticamente e sem pensar.</p>
            <div className="cards">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}