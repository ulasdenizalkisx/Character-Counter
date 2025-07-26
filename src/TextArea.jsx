import React, {useState} from 'react';
import Tick from './assets/images/icon-check.svg';

function TextArea(props) {
    const spanStyle = {
        marginLeft: '10px'
    }

    const color = {
        color: 'var(--Neutral-200)'
    }

    const colorLight = {
        color: 'var(--Neutral-900)'
    }

    const alligner = {
        marginTop: '16px',
        display: 'flex',
        justifyContent: 'space-between'
    }

    const seperator = {
        marginLeft: '24px'
    }

    const checkBoxAlligner = {
        display:'flex',
        alignItems: 'center'
    }

    const [isChecked1, setIsChecked1] = useState(false);
    const handleChange = (e) => {
        setIsChecked1(e.target.checked);
    }

    const [isChecked2, setIsChecked2] = useState(false);
    const handleChange2 = (e) => {
        setIsChecked2(e.target.checked);
    }

    return(
        <div>
            <textarea className={props.mode ? 'text_area_light textPreset3' : 'text_area textPreset3'}></textarea>
            <div style={alligner}>
                <div style={checkBoxAlligner} >
                    <label tabIndex={0} id="checkBox1" className={`${props.mode ? 'checkBoxLabel checkBoxLabelLight':'checkBoxLabel'} ${isChecked1 ? 'checkBoxChecked' : ''}`} htmlFor="exspaces">{isChecked1 ? <img src={Tick} tabIndex={-1} alt="icon"/> : null}</label>
                    <input tabIndex={-1} id="exspaces" onChange={handleChange} checked={isChecked1} name="exspaces" className="checkBox" type="checkbox"/> 
                    <span style={spanStyle} className={props.mode ? 'textPreset4 colorLight':'textPreset4 color'}>Exclude Spaces</span>
                    <label tabIndex={0} id="checkBox2" className={`${props.mode ? 'checkBoxLabel checkBoxLabelLight':'checkBoxLabel'} scblm ${isChecked2 ? 'checkBoxChecked' : null}`} htmlFor="setchlimit">{isChecked2 ? <img src={Tick} tabIndex={-1} alt="icon"/> : null}</label>
                    <input tabIndex={-1} id="setchlimit" onChange={handleChange2} name="setchlimit" className="checkBox" style={seperator} type="checkbox"/> 
                    <span style={spanStyle} className={props.mode ? 'textPreset4 colorLight':'textPreset4 color'}>Set Character Limit</span>
                </div>
                <span style={props.mode  ? colorLight :color} className="textPreset4">Approx. reading time: 1 minutes</span>
            </div>
        </div>
    );

}

export default TextArea