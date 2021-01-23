
import React from 'react'
import './Detector.css'

 const Detector = ({imageUrl,box }) =>  {
    return(
        <div className = 'center ma'>
            <div className ='absolute '> 
                <img  id = 'imageId' alt = '' src = {imageUrl} width ='500' height ='auto'/>
                <div  className ='bounding_box' style ={{top:box.topRow, right: box.rightCol, bottom: box.bottomRow,left:box.leftCol}}></div>
            </div>
        </div>
    )
}

export default Detector;