import React, { useState } from 'react'
import { BrowserRouter, HashRouter, Switch, Route, Link , useHistory } from "react-router-dom";
import {
    Button,
    Grid,
    Paper,
    TextField,
    Checkbox,
    MenuList,
    MenuItem,
}
    from '@material-ui/core';
import Firebase from '../services/FirebaseConect'
import { v4 as uuidv4 } from 'uuid';
import Banner from '../components/Banner'


export default function Recados() {
    let history = useHistory();

    const [recado, setRecado] = useState("")
    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [assunto, setAssunto] = useState("")

    const limpar = () => {
        setRecado("")
        setEmail("")
        setNome("")
        setAssunto("")
    }

    const salvarRegistro = () => {
        
        let objeto ={
            assunto: assunto,
            recado: recado,
            email: email,
            nome: nome,
        }
        let code = uuidv4()

        Firebase
            .database()
            .ref(`recados/${code}`)
            .set(objeto)
            .then(() => {
                limpar()
            })
            .catch((erro) => {
                console.log(erro)
            })

            };


    return (
        <div>
                <section id = 'image2' >
                    <Banner 
                    title = ""
                    message = ""/>
                </section> 
                <div className="inner">
                <div container spacing={1}>
                    <div item sm={2} xs={12}>
                        <label>
                            <h3>Mande uma mensagem para nossa equipe!</h3>
                        </label>
                    </div>
                </div>
                </div> 
        <Grid container spacing={1} >
            <Grid item sm={10} xs={12}>
                <TextField
                    label="Assunto"
                    variant="outlined"
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                    size="small"
                    type="email"
                    style={{ width: "100%", marginBottom: 10 }} />  
                <TextField
                    label="Recado"
                    variant="outlined"
                    value={recado}
                    onChange={(e) => setRecado(e.target.value)}
                    size="small"
                    type="email"
                    style={{ width: "100%", marginBottom: 10 }} />
                <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    variant="outlined"
                    size="small"
                    type="email"
                    style={{ width: "100%", marginBottom: 10 }} />
                <TextField
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    label="Nome"
                    variant="outlined"
                    size="small"
                    type="email"
                    style={{ width: "100%", marginBottom: 10 }} />
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={salvarRegistro}
                    style={{ float: "right" }}>
                    Enviar Mensagem
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={limpar}
                    style={{ float: "right" }}>
                    Cancelar
                </Button>
            </Grid>
        </Grid >
        </div>
    )
}
