import React, {useState,useEffect} from 'react';
import Tick from './assets/images/icon-check.svg';
import errorIcon from './assets/images/icon-info.svg';

function TextArea(props) {


    const [text,setText]= useState();

    const [limitReached,setLimitReached] = useState(false);
    const [readTime,setReadTime] = useState();

    const textHandler = (e) => {
        let textString = e.target.value;
        props.sendText(textString);
        setReadTime((textString.length/200).toFixed(1));

        if (props.exSpace === undefined || props.exSpace === true) {    
            let counterCharacter = 0;       
            setText(textString);
            for (const x of textString) {
                    counterCharacter++;
            }
            if (textString.length >= characterLimit) {
                setLimitReached(true);
                setIsDisabled(true);
            }
            else if (textString.length < characterLimit) {
                setLimitReached(false);
                setIsDisabled(false);
            }
            props.onSendCharacters(counterCharacter);
        }
        else {
            let counterCharacter = 0;       
            setText(textString);
            for (const x of textString) {
                if (x !== " ") {
                    counterCharacter++;
                }          
            }
            if (counterCharacter >= characterLimit) {
                setLimitReached(true);
                setIsDisabled(true);
            }
            else if (counterCharacter < characterLimit) {
                setLimitReached(false);
                setIsDisabled(false);
            }
            props.onSendCharacters(counterCharacter);
        }
        
        

        let words = textString;
        let trimmed = words.trim();
        let length = 0;
        trimmed !== "" ? length = trimmed.split(/\s+/).length : length = 0  ;
        props.onSendWords(length);

        let x = words.split(/[.!?]+/).map(c => c.trim()).filter(c => c.length > 0);
        props.onSendSentences(x.length);
    }

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

    const [isExcludeSpacesChecked, setIsExcludeSpacesChecked] = useState(false);

    const [isChecked1, setIsChecked1] = useState(false);
    const handleChange = (e) => {
        setIsChecked1(e.target.checked);
        setIsExcludeSpacesChecked(e.target.checked);
        props.onSendExcludeSpaces(isExcludeSpacesChecked);
    }

    const [isChecked2, setIsChecked2] = useState(false);
    const handleChange2 = (e) => {
        setIsChecked2(e.target.checked);
        if (!(e.target.checked)) {
            setCharacterLimit(999);
        }
    }

    const displayLimit = {
        display: 'none'
    }

    const displayLimit1 = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '12px'
    }

    const [characterLimit,setCharacterLimit] = useState(999);
    const handleLimit = (e) => {
        setCharacterLimit(e.target.value);
    }

    const [isDisabled,setIsDisabled] = useState();

    return(
        <div>
            <textarea maxLength={characterLimit === 0 || characterLimit === undefined ? 999 : characterLimit} id="textArea" value={text} onChange={textHandler} className={props.mode ? 'text_area_light textPreset3' : 'text_area textPreset3'}></textarea>
            <div style={limitReached ? displayLimit1 : displayLimit} className="error_div"><img src={errorIcon}/><span className="textPreset4">Limit reached! Your text exceeds {characterLimit} characters.</span></div>
            <div style={alligner}>
                <div className="checkBoxAlligner" >
                    <div className='innerAlligner1'>
                        <div className="innerAlligner">
                            <label tabIndex={0} id="checkBox1" className={`${props.mode ? 'checkBoxLabel checkBoxLabelLight':'checkBoxLabel'} ${isChecked1 ? 'checkBoxChecked' : ''}`} htmlFor="exspaces">{isChecked1 ? <img src={Tick} tabIndex={-1} alt="icon"/> : null}</label>
                            <input tabIndex={-1} id="exspaces" onChange={handleChange} checked={isChecked1} name="exspaces" className="checkBox" type="checkbox"/> 
                            <span style={spanStyle} className={props.mode ? 'textPreset4 colorLight':'textPreset4 color'}>Exclude Spaces</span>
                        </div>
                        <div className="innerAlligner">
                            <label tabIndex={0} id="checkBox2" className={`${props.mode ? 'checkBoxLabel checkBoxLabelLight':'checkBoxLabel'} scblm ${isChecked2 ? 'checkBoxChecked' : null}`} htmlFor="setchlimit">{isChecked2 ? <img src={Tick} tabIndex={-1} alt="icon"/> : null}</label>
                            <input tabIndex={-1} id="setchlimit" onChange={handleChange2} name="setchlimit" className="checkBox" style={seperator} type="checkbox"/> 
                            <span style={spanStyle} className={props.mode ? 'textPreset4 colorLight':'textPreset4 color'}>Set Character Limit</span>
                            <input type="number" onChange={handleLimit} maxLength={3} className={` ${isChecked2 ? "displayBlock" : "displayNone"} ${props.mode ? 'chLimitInputLight' :'chLimitInputDark'} scblm textPreset4`} id="chLimit" disabled={isDisabled}></input>
                        </div>
                    </div>
                    <span style={props.mode  ? colorLight :color} className="textPreset4">Approx. reading time: {readTime === undefined ? 0 : readTime} minutes</span>
                </div>
            </div>
        </div>
    );

}

export default TextArea