import React from 'react';
import "./index.css";


export default function Skills() {

    return (
        <div className="skills">
            <div className="title">
                <strong> Skills</strong>
            </div>
            <div className="backtitle">
                <strong >Skills</strong>
            </div>
            <p data-aos="fade-up" data-aos-duration="2000">Sonhos sem disciplina produzem pessoas frustradas, que nunca transformam seus sonhos em realidade, e disciplina sem sonhos produz servos, pessoas que executam ordens, que fazem tudo automaticamente e sem pensar.</p>
            <div className="listskills">
                <div className="item">
                    <div className="top">
                        <div style={{left: '10px'}}> Photohop</div>
                        <div style={{right: '10px'}}> 30%</div>
                    </div>
                    <div className="skillitem">
                        <div className="skillsubitem" style={{ width: '30%' }}>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="top">
                        <label> C++</label>
                        <label> 50%</label>
                    </div>
                    <div className="skillitem">
                        <div className="skillsubitem" style={{ width: '50%' }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}