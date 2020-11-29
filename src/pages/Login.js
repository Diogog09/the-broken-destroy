
import React, { useState, useLayoutEffect } from 'react'
//import Header from './components/Header'
//import Footer from './components/Footer'
import Banner from '../components/Banner'
import { useHistory , Link, HashRouter} from "react-router-dom";
import Firebase from '../services/FirebaseConect'
import {
  Button,
  Grid,
  Paper,
  TextField,
  Checkbox
}
  from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';



function Login(){
  let history = useHistory();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [msg, setMsg] = useState("")
  const [lembreme, setLembreme] = useState(false)
  const [lista, setLista] = useState([])

  const login = () => {

    if (lembreme == false) {
        localStorage.removeItem("email")
        localStorage.removeItem("password")
    }

    Firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((retorno) => {
            sessionStorage.setItem("uuid", retorno.user.uid)
            
            if (lembreme === true) {
                localStorage.setItem("email", email)
                localStorage.setItem("password", password)
            }
            setMsg("")
            setTimeout(() => {
                history.push("/showview");
            }, 100);


        })
        .catch((erro) => {
            console.log(erro)
            setMsg("Usuário ou senha inválidos!")
        })
}

function cadastrar(){
  Firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((retorno) =>{
      setMsg("Usuário cadastrado!")
    })
    .catch((erro)=> {
      console.log(erro)
    
  });
}
  
return ( 
  <React.Fragment >
    <section id = 'image2' >
        <Banner 
        title = ""
        message = ""/>
    </section> 

    <div className = "inner" >
        <label >
          < h3 > E - mail </h3>
          < input 
            type = "email" 
            id = "email"
            name = "email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/> 
        </label> 
        <label > 
          < h3 > Senha </h3>
          < input 
            type = "password"
            id = "password"
            name = "password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <Grid item sm={12} xs={12} style={{ textAlign: "center", color: "red", marginBottom: 5, fontSize: 12 }}>
                            {msg}
                        </Grid>
        <button 
          class = "button special" 
          onClick={login}
          style={{ float: "none" }}> 
          LOGIN 
        </button>
        <button 
          class = "button special" 
          onClick={cadastrar}
          style={{ float: "right" }}> 
          Cadastrar 
        </button>
        <Grid>
        <Checkbox
          checked={lembreme}
          onChange={(e) => setLembreme(e.target.checked)}
          inputProps={{ 'label:before': 'checkbox' }}/>
          Lembre-me
      </Grid>
    </div>
  </React.Fragment>
);
}
export default Login;