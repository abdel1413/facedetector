import React from 'react'
import Tilt from 'react-tilt';
import './Logo.css'


const Logo =()=>{
    return(
        <div className = 'ma4 mt0'>
            <Tilt className = 'Tilt br2 shadow-3' options={{max:30}} style ={{height:100, width:100}}>
                <div className = 'Tilt-inner'>
                 
                </div>
            </Tilt>
        </div>
    )
}
 export default Logo;