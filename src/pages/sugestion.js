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


export default function Sugestion() {
    let history = useHistory();


    const [sugestao, setSugestion] = useState("")
    const [imagem_inp, setImagem] = useState("")
    const [descricao, setDescricao] = useState("")

    const limpar = () => {
        setSugestion("")
        setImagem("")
        setDescricao("")
    }

    const logoff = () => {
        sessionStorage.removeItem("uuid")
        Firebase
            .auth()
            .signOut()
            .auth()
            .signOut()
            .then(() => {
                history.push("/");
            }).catch(() => {
                history.push("/");
            })        
    }

    
    const salvarRegistro = () => {
        
        let objeto ={
            sugestao: sugestao,
            imagemesboço: imagem_inp,
            descricao: descricao,
        }
        let code = uuidv4()

        Firebase
            .database()
            .ref(`sugestoes/${code}`)
            .set(objeto)
            .then(() => {
                limpar()
            })
            .catch((erro) => {
                console.log(erro)
            })

            };
            //error => {
              //  console.error(error);
           // }
        

    const recados =() =>{
    history.push("/recadosList");
    }
    
    const sugestionlist =() =>{
        history.push("/SugestionList");
    }

    const showview =() =>{
        history.push("/showview");
    }

    return (
        <div>
                <section id = 'image2' >
                    <Banner 
                    title = ""
                    message = ""/>
                </section> 
                <div className="inner">
                <div container spacing={1}>
                    <div item sm={10} xs={12}>

                    </div>
                    <div item sm={2} xs={12}>   
                        <button
                            onClick={logoff}
                            variant="contained"
                            color="primary">
                            Logoff
                        </button>
                        <button
                            onClick={showview}
                            variant="contained"
                            color="primary">
                            showview
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
        <Grid container spacing={1} >
            <Grid item sm={10} xs={12}>
                <TextField
                    label="sugestao"
                    variant="outlined"
                    value={sugestao}
                    onChange={(e) => setSugestion(e.target.value)}
                    size="small"
                    type="email"
                    style={{ width: "100%", marginBottom: 10 }} />
                <TextField
                    value={imagem_inp}
                    onChange={(e) => setImagem(e.target.value)}
                    label="esboço/exemplo"
                    variant="outlined"
                    size="small"
                    type="email"
                    style={{ width: "100%", marginBottom: 10 }} />
                <TextField
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    label="Descrição"
                    variant="outlined"
                    size="small"
                    type="email"
                    style={{ width: "100%", marginBottom: 10 }} />
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={salvarRegistro}
                    style={{ float: "right" }}>
                    Enviar Dados
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
