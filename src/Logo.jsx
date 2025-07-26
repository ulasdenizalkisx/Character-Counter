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
        props.onSend(lightMode);
    }

    const alligner = {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
    }

    const iconDivDark = {
        border:'none',
        width: '44px',
        height: '44px',
        borderRadius: '8px',
        backgroundColor: 'var(--Neutral-700)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    }

    const iconDivLight = {
        border:'none',
        width: '44px',
        height: '44px',
        borderRadius: '8px',
        backgroundColor: 'var(--Neutral-100)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    }

    return( 
        <div style={alligner}>
            <img src={props.mode ? lightLogo : darkLogo} alt="Logo"/>
            <button onClick={sendData} style={props.mode ? iconDivLight : iconDivDark}><img src={props.mode ? lightModeButton:darkModeButton} alt="Mode Icon"/></button>
        </div>

    );

}

export default Logo