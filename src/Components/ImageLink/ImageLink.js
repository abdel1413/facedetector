import React from 'react'
import './ImageLink.css'

const OnInputChange =(event)=>{
 console.log(event.target.value)
}

const onButtonClick = (event) =>{
  console.log(OnInputChange(event))
}

const ImageLink = () =>{
    return(
        <div >
            {'this is a magic face detector. give it a try'}
            <div className ='center' >
                <div className =' form center pa4 br3 shadow-5'>
                    <input className = ' pa2 f4 w-70 ' type ='text'  onChange = {OnInputChange}/>
                    <button className=' pa2 w-30 br3 shadow-5 dib white bg-light-purple  grow f4 pointer'
                     onClick = {onButtonClick}> detect</button>  
                </div>
            </div>
        </div>
    )
}
export default ImageLink;