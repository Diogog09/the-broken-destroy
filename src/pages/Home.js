import React from 'react';
import Banner from '../components/Banner'
import {useHistory } from "react-router-dom";



function Home() {
    let history = useHistory();

    const contato =() =>{
        history.push("/contato");
    }
    const sugestionlist =() =>{
        history.push("/SugestionList");
    }


    return ( 
        <body>
            <div>
                <section id = 'image1' >
                    <Banner img = 'C:\Users\User\Desktop\Scripts do Diogo\semestre 2\Tópicos Especiais\Projetos React\teste\public\images\banner.jpg'
                    title = ''
                    message = "⠀"/>
                </section>
                <div className="inner" Style='text-align: center'>
                    Seja Bem-vindo ao The Broken Destroy!
                </div>
                <div className="inner">
                <div item sm={2} xs={12}>
                    <button
                        onClick={contato}
                        variant="contained"
                        color="primary">
                        contato
                    </button>
                    <button
                        onClick={sugestionlist}
                        variant="contained"
                        color="primary">
                        Sugestoes de novos modelos
                    </button>
                </div>
                </div>
                
            <section id = "one"className = "wrapper" >
                <div className = "inner" >
                    <div className = "flex flex-3" >
                        <article >
                            <header >
                                < h3 > Quem Somos </h3> 
                            </header>
                            <p>Somos a mais nova marca de moda do mercado
                            a The Broken Destroy vai te deixar com um visual jamais visto antes.
                            </p>
                        </article >
                        <article >
                            <header >
                                < h3 > Nosso objetivo </h3> 
                            </header>
                            <p>Queremos levar alegria e conforto aos nossos clientes
                            através das mais belas e exclusivas peças de roupas que fabricamos.
                            </p>
                        </article >
                        <article >
                            <header >
                                < h3 > Nossa Visão </h3> 
                            </header>
                            <p>Somos um grupo de jovens sonhadores
                            que veem um futuro brilhante pela frente.
                            </p>
                        </article >
                    </div>
                </div>
            </section>   
            </div>  
        </body>   
        
    );
}
export default Home;