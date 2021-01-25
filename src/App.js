import React,{Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo'
import ImageLink from './Components/ImageLink/ImageLink';
import Rank from './Components/Rank/Rank';
import Detector from './Components/Detector/Detector'
import SignInForm from "./Components/SignIn/SignInForm"
// import RegisterForm from './Components/Register/RegisterForm'

import './App.css';
import RegisterForm from './Components/Register/RegisterForm';

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
      imageUrl :'',
      box:{} ,
      route :'SignInForm',
      isSignedIn : false

    }
  }

  onInputChange =(e) =>{
    
  this.setState({input:e.target.value})
  
  }

  calculatefaceLocation =(data)=> {
   const clarifaiFace =  data.outputs[0].data.regions[0].region_info.bounding_box;
   const image = document.getElementById('imageId')
   const width =  Number( image.width)
   const height = Number( image.height)
   return ({
     leftCol : clarifaiFace.left_col * width,
     topRow : clarifaiFace.top_row * height,
     rightCol: width - (clarifaiFace.right_col * width),
     bottomRow: height - (clarifaiFace.bottom_row * height)
   })
  }

   displayBox =(box) =>{
     console.log(box)
     this.setState({box:box})

   }

onButtonClick =()=>{
  this.setState({imageUrl:this.state.input})
  
 app.models
    .predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response =>{
      this.displayBox(this.calculatefaceLocation(response))
      })
    .catch(err => console.log(err))
}

onRouteChange =(route) =>{
  if(route ==='signout'){
    this.setState({isSignedIn: false})
  }
  else if(route === 'home'){
    this.setState({isSignedIn:true})
  }
  this.setState({route:route})
  
}
  render(){

    return (
      <div className="App">
          <Particles className='particles' params={particleOption}/>
          <Navigation  isSignedIn = {this.state.isSignedIn} onRouteChange ={this.onRouteChange}/>
          
          { this.state.route === 'home'
             ? <div>
                  <Logo/>  
                  <Rank/>
                  <ImageLink onInputChange = {this.onInputChange} onButtonClick = {this.onButtonClick}/>
                  <Detector imageUrl ={this.state.imageUrl} box ={this.state.box}/>
              </div>
              :(
                this.state.route === 'signin'
                ?<SignInForm onRouteChange = {this.onRouteChange}/>
                :<RegisterForm onRouteChange = {this.onRouteChange}/>
              )
         }
        </div>
    );
    
  }
 
}

export default App;
