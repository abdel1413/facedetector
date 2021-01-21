import React,{Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo'
import ImageLink from './Components/ImageLink/ImageLink';
import Rank from './Components/Rank/Rank';
import Detector from './Components/Detector/Detector'

import './App.css';

const app = new Clarifai.App({
  //apiKey:'98f683fb10f0429c9ef1619e7610720a'
  apiKey:'98f683fb10f0429c9ef1619e7610720a'
 
 });

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
  constructor(){
    super();
    this.state={
      input : '',
       imageUrl :''

    }


  }

  onInputChange =(e) =>{
  this.setState({input:e.target.value})
  }

onButtonClick =()=>{
  this.setState({imageUrl:this.state.input})
 app.models
    .predict(Clarifai.COLOR_MODEL,"https://samples.clarifai.com/face-det.jpg")
    .then(
      function(response){
        console.log(response)
      },
        function(err){
           console.log(err)
      })
}
  render(){

    return (
      <div className="App">
          <Particles className='particles' params={particleOption}/>
          <Navigation/>
          <Logo/>  
          <Rank/>
          <ImageLink onInputChange = {this.onInputChange} onButtonClick = {this.onButtonClick}/>
          <Detector imageUrl ={this.state.imageUrl}/>
        </div>
    );
    
  }
 
}

export default App;
