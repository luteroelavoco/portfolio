import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import "./index.css";

export default function Headers() {

    const [menus, setmenus] = useState([
        {
            id: 1,
            title: "Inicio",
            href:"inicio",
            active: true,
        },
        {
            id: 2,
            title: "Acerca",
            href:"acerca",
            active: false,
        },
        {
            id: 3,
            title: "Resumo",
            href:"resumo",
            active: false,
        },
        {
            id: 4,
            title: "Skills",
            href:"skills",
            active: false,
        },
        {
            id: 5,
            title: "Projectos",
            href:"projectos",
            active: false,
        },
        {
            id: 6,
            title: "Meu Blog",
            href:"blog",
            active: false,
        },
        {
            id: 7,
            title: "Contacto",
            href:"contacto",
            active: false,
        }



    ]);


    return (
        <div className="Header">
            <div className="brand">
                <strong> CIENTISTA1</strong>
            </div>
            <div className="nav">
                <label for="toggle"><span> &#9776;</span>MENU</label>
                <input type="checkbox" id="toggle"></input>
                <div className="menu">
                    <ul>
                        {menus.map(item =>

                            <li key={item.id}>
                                <Link
                                    activeClass="active"
                                    to={item.href}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                >
                                    {item.title}
                                </Link>

                            </li>
                        )}

                    </ul>
                </div>
            </div>
        </div>
    )
};