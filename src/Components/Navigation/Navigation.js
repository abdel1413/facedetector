import React from 'react';

const Navigation = ({onRouteChange })=>{
    return(
        <nav style ={{display:'flex',justifyContent: 'flex-end'}}>
            <p 
            onClick ={() => onRouteChange('SignInForm')}
            className ='f3 black link dim pointer underline pa3'> Sign Out
            </p>
        </nav>
    )

}
export default Navigation;