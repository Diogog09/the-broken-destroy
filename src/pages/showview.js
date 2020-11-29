import React, { useState, useLayoutEffect } from 'react'
import Banner from '../components/Banner'
import Firebase from '../services/FirebaseConect'
import {useHistory } from "react-router-dom";


export default function Showview() {
    let history = useHistory();

    const logoff = () => {
        sessionStorage.removeItem("uuid")
        Firebase
            .auth()
            .signOut()
            .then(() => {
                history.push("/");
            }).catch(() => {
                history.push("/");
            })
    }

    const sugestion =() =>{
        history.push("/sugestion");
    }

    const sugestionlist =() =>{
        history.push("/SugestionList");
    }

    const recados =() =>{
        history.push("/recadosList");
    }

    return ( 
        <div>
            <section id = 'image1' >
                <Banner 
                title = ""
                message = ""/>
            </section>
            <div className="inner"> 
                <div container spacing={1}>
                    <div item sm={2} xs={12}>
                        <button
                            onClick={logoff}
                            variant="contained"
                            color="primary">
                            Logoff
                        </button>
                        <button
                            onClick= {sugestion}
                            variant="contained"
                            color="primary">
                            sugestions
                        </button>
                        <button
                            onClick= {sugestionlist}
                            variant="contained"
                            color="primary">
                            Outras sugestões
                        </button>
                        <button
                            onClick= {recados}
                            variant="contained"
                            color="primary">
                            Lista de recados
                        </button>
                    </div>
                </div>
            </div>

            <section id = "one" className = "wrapper" >
                <div className = "inner" >
                    <div className = "flex flex-3" > 
                        <article >
                            <header >
                                <h3 > aqui vão os produtos </h3>
                                <element class="box person">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6f9fef0sr0O-xXtZm6Fpr5nl6Twx8dKaFw&usqp=CAU"/>
                                </element>
                            </header >
                            <p > </p>
                        </article>
                        <article >
                            <header >
                                <h3 > aqui vão os produtos 2 </h3>
                                <element class ="box person">
                                    <element class ="image">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjEfXfKH27lJcpQuefjU6sQuXf7VSXW2NQXQ&usqp=CAU"/>
                                    </element>
                                </element>
                               
                            </header >
                            <p > </p>
                        </article>
                        <article >
                            <header >
                                <h3 > aqui vão os produtos </h3>
                                <element class="box person">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtw3NamwoQ0iavL3n_uwp8a7yr8vMiS7e0aA&usqp=CAU"/>
                                </element>
                            </header >
                            <p > </p>
                        </article>
                        <article >
                            <header >
                                <h3 > aqui vão os produtos </h3>
                                <element class="box person">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaAPP0QZzZXD5m2mA7zLxkJ9y0XW5Hvh2dDQ&usqp=CAU"/>
                                </element>
                            </header >
                            <p > </p>
                        </article>
                    </div>
                </div>
            </section>    
        </div>
    )
}