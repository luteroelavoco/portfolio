import React, { useState } from 'react';
import "./index.css";


export default function Skills() {

    const [skills, setSkils] = useState([
        {
            name: "C++",
            value: "30%"
        },
        {
            name: "PHP",
            value: "30%"
        },
        {
            name: "C#",
            value: "40%"
        },
        {
            name: "Java",
            value: "50%"
        },
        {
            name: "Java Script",
            value: "55%"
        },
        {
            name: "CSS",
            value: "55%"
        },
        {
            name: "HTML",
            value: "80%"
        }
    ]);

    return (
        <div className="skills">
            <div className="title">
                <strong> Skills</strong>
            </div>
            <div className="backtitle">
                <strong >Skills</strong>
            </div>
            <p data-aos="fade-up" data-aos-duration="2000">As nossas qualidades nem sempre definem o nosso valor de mercado mas elas podem definir quem nós somos, o que fazemos e como fazemos.</p>
            <div className="listskills">
                {skills.map((item, index) => 
                    <div key={index} className="item" >
                        <div className="top">
                            <label> {item.name}</label>
                            <label> {item.value}</label>
                        </div>
                        <div className="skillitem">
                            <div className="skillsubitem" style={{ width: item.value }}>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}