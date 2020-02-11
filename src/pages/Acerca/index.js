import React from 'react';
import "./index.css";
import imagem from "../../assets/primary_foto.png";
export default function Acerca() {
    return (
        <div className="acerca">
            <div className="media">
                <img src={imagem} class="mr-3" alt="..." />
                <div className="media-body">
                    <div className="title">
                        <strong> Acerca de mim</strong>
                    </div>
                    <div className="backtitle">
                        <strong >Acerca</strong>
                    </div>
                    <p>Sou uma pessoa muito carismática, ambiciosa e sempre em busca de conhecimento.</p>
                    <div className="biografia">
                        <div className="item">
                            <label> Nome :</label>
                            <span style={{ marginLeft: '40px' }}> Lútero Elavoco</span>
                        </div>
                        <div className="item">
                            <label>Nascimento :</label>
                            <span style={{ marginLeft: '-50px' }}> 21 de Setembro de 2000</span>
                        </div>
                        <div className="item">
                            <label> Phone : </label>
                            <span style={{ marginLeft: '40px' }}>+244 994828377</span>
                        </div>
                        <div className="item">
                            <label> Endereço :</label>
                            <span style={{ marginLeft: '10px' }}> Acarape , Ceará , Brasil</span>
                        </div>
                        <div className="item">
                            <label> Código Postal : </label>
                            <span style={{ marginLeft: '-20px' }}>62785</span>
                        </div>
                        <div className="item">
                            <label> Instagram : </label>
                            <span style={{ marginLeft: '10px' }}>lutero_elavoco</span>
                        </div>
                        <div className="item">
                            <label> Email : </label>
                            <span style={{ marginLeft: '0px' }}>luteroelavoco90@gmail.com</span>
                        </div>
                        <div className="item">
                            <label> Github : </label>
                            <span style={{ marginLeft: '-10px' }}><a href="https://github.com/cientista1">github.com/Cientista1</a></span>
                        </div>
                        <div className="item">
                            <label> Facebook : </label>
                            <span style={{ marginLeft: '-30px' }}><a href="https://www.facebook.com/Cientista1">facebook.com/Cientista1</a></span>
                        </div>

                    </div>
                    <div>
                        <label style={{ fontSize: '20px' }}> <span style={{ color: '#ffbd39' }}>3 </span>Projectos concluídos</label>
                    </div>
                    <button> DONWLOAD CV </button>
                </div>
            </div>
        </div>
    )
}