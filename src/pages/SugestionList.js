import React, { useState, useLayoutEffect } from 'react'
import { BrowserRouter, HashRouter, Switch, Route, Link, useHistory } from "react-router-dom";
import Firebase from '../services/FirebaseConect'
import Banner from '../components/Banner'

import {Button, Grid, Paper,}from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {


}
    from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';


export default function SugestionList() {
    const history = useHistory();
    const [lista, setLista] = useState([])

    useLayoutEffect(() => {

        Firebase
            .database()
            .ref(`/sugestoes`)
            .on('value', snapchot => {
                // converter objetos em listas
                if (snapchot.val()) {
                    let dados = snapchot.val()
                    const keys = Object.keys(dados)
                    const lista = keys.map((key) => {
                        return { ...dados[key], id: key }
                    })
                    setLista(lista)
                } else{
                    setLista([])
                }
            })

    }, [])


    const excluir = (item) => {
        Firebase
            .database()
            .ref(`/sugestoes/${item.id}`)
            .remove()

    }

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
    const showview = () => {
        history.push("/showview");
        }
    const sugestion =() =>{
        history.push("/sugestion");
    }

    const recados =() =>{
        history.push("/recadosList");
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
                            onClick= {showview}
                            variant="contained"
                            color="primary">
                            showview
                        </button>
                        <button
                            onClick= {sugestion}
                            variant="contained"
                            color="primary">
                            sugestões
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
                    <Grid item sm={12} xs={12}>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Sugestão:</TableCell>
                                        <TableCell align="right">imagem/esboço</TableCell>
                                        <TableCell align="right">descrição</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {lista.map((item, key) => {
                                        return <TableRow key={key}>
                                            <TableCell component="th" scope="row">
                                                {item.sugestao}
                                            </TableCell>
                                            <TableCell align="right">{item.imagemesboço}</TableCell>
                                            <TableCell align="right">{item.descricao}</TableCell>
                                            <TableCell align="right">
                                                <Button
                                                    variant="contained"
                                                    onClick={() => excluir(item)}
                                                    color="primary"
                                                    startIcon={<DeleteIcon />}>
                                                    Excluir
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    }
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                <Grid item sm={12} xs={12}>
                    <Button
                        variant="contained"
                        onClick={sugestion}
                        color="primary"
                        startIcon={<AddCircleIcon />}>
                        Nova sugestao
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}