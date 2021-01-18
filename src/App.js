import React,{Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo'
import ImageLink from './Components/ImageLink/ImageLink';
import Rank from './Components/Rank/Rank'

const particleOption = {
    particles: {
      numbers: { value:100,
        density: {
          enable: true,
          value_area:800
       
        }
      }
    }
  }
  



class App extends Component {

  

  render(){

    return (
      <div className="App">
          <Particles className='particles' params={particleOption}/>
          <Navigation/>
          <Logo/>  
          <Rank/>
          <ImageLink/>
        </div>
    );
    
  }
 
}

export default App;
