import React from 'react';

const Navigation = ({onRouteChange, isSignedIn })=>{
    if(isSignedIn){
        return (
            <nav style ={{display:'flex', justifyContent:'flex-end'}}>
            <p onClick = {()=>onRouteChange('signout')}
            className ='f3 link dim black pa3 underline pointer'> Sign Out</p>
        </nav>
            );
    }
    else{
    return(
        <nav style ={{display:'flex',justifyContent: 'flex-end'}}>
            <p 
            onClick ={() => onRouteChange('signin')}className ='f3 black link dim pointer underline pa3'> Sign In 
            </p>
            <p
            onClick ={() => onRouteChange('register')}className ='f3 black link dim pointer underline pa3'> Register 
            </p>
        </nav>
    )
    }
}
export default Navigation;