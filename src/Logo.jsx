import darkLogo from './assets/images/logo-dark-theme.svg';
import lightLogo from './assets/images/logo-light-theme.svg';
import darkModeButton from './assets/images/icon-sun.svg';
import lightModeButton from './assets/images/icon-moon.svg';
import React, {useState, useEffect} from 'react';

function Logo(props) {

    const [lightMode,setLightMode] = useState();

    const sendData = () => {
        const newMode = !lightMode;
        setLightMode(newMode);
        props.onSendLogo(lightMode);
    }

    const alligner = {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
    }

    return( 
        <div style={alligner}>
            <img className="logo" src={props.mode ? lightLogo : darkLogo} alt="Logo"/>
            <button className={`iconDiv ${props.mode ? 'iconDivLight' : 'iconDivDark'} `} onClick={sendData} ><img src={props.mode ? lightModeButton:darkModeButton} alt="Mode Icon"/></button>
        </div>

    );

}

export default Logo