import React,{Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo'
import ImageLink from './Components/ImageLink/ImageLink';
import Rank from './Components/Rank/Rank'



class App extends Component {
  render(){

    return (
      <div className="App">
        <header className="App-header">
         <Navigation/>
         <Logo/>  
         <Rank/>
         <ImageLink/>
         
        </header>
      </div>
    );
    
  }
 
}

export default App;
