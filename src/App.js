import React, { useLayoutEffect, useState } from 'react'
import { BrowserRouter, HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Showview from './pages/showview'
import Sugestion from './pages/sugestion'
import SugestionList from './pages/SugestionList'
import Contato from './pages/contato'
import RecadosList from './pages/recadosList'


import Firebase from './services/FirebaseConect'


function App() {

  const [user, setUser] = useState(null)

  useLayoutEffect(() => {
    Firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user !== null) {
          setUser(user.uid)
        } else {
          setUser(null)
        }
      })


  }, [])

  const PrivateRoute = ({ component: Component }) => {
    return <Route
      render={(props => {
        if (user) {
          return <Component {...props} />
        } else {
          return <Redirect to={{ pathname: "/" }} />
        }


      })}

    />
  }

    return ( <div>
        <HashRouter >
        <Header/>
          <Switch >
            <Route path = "/" exact = { true } component = { Home }/>
            <Route path = "/login" component = { Login }/>
            <Route path = "/contato" component = { Contato }/>
            <PrivateRoute path = "/showview" component = { Showview }/>
            <PrivateRoute path = "/sugestion" component = { Sugestion }/>
            <Route path = "/SugestionList" component = { SugestionList }/>
            <PrivateRoute path = "/recadosList" component = { RecadosList }/>
          </Switch >
        </HashRouter>
        <Footer message = "Desenvolvido por Diogo Gonçalves Mello"/>
        
        </div>
    );
}

export default App;
