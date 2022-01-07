import React from "react";
import './index.css';

import {Switch,Route} from "react-router-dom";
//layout
import LandingPageLayout from "./layouts/LandingPage";
//pages
import HomePage from "./pages/HomePage";
import Signin from './pages/Sign-in';
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/contact/contact";

class App extends React.Component{
render(){
  return (
    <div>
    <LandingPageLayout  heading="react tailwind"/>
    <Switch>
      <Route exact path="/home" component={HomePage}/>
      <Route path='/about' component={About}/>
      <Route  path="/signin" component={Signin}/>
      <Route  path="/contact" component={Contact}/>

    </Switch>
    <Footer/>
    </div>
  );
}
}
export default App;