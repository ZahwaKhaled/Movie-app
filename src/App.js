import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import NotFound from './NotFound';
import Navbar from './Navbar';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import home from './Home';
import { useState } from 'react';
import {LANGUAGECONTEXT} from './Context/Context'
import Favourites from './Favourites';

function App() {
  const [Context, setContext] = useState("EN")
  return (
    <div className="App">
    <LANGUAGECONTEXT.Provider value={{Context, setContext}}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path={"/"} component={home} />
          <Route exact path={"/Login"} component={Login} />
          <Route exact path={"/Register"} component={Register} />
          <Route exact path={"/Movies"} component={Movies} />
          <Route exact path={"/Favourites"} component={Favourites} />
          <Route exact path={"/MovieDetails/:id"} component={MovieDetails} />
          <Route exact path={"*"} component={NotFound} />

        </Switch>
      </BrowserRouter>
      </LANGUAGECONTEXT.Provider>
    </div>
  );
}

export default App;
