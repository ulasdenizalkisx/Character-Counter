import TotalCharacter from './assets/images/pattern-character-count.svg';
import WordCount from './assets/images/pattern-word-count.svg';
import SentenceCount from './assets/images/pattern-sentence-count.svg';
import seeMoreIcon from './assets/images/seeMoreIcon.jpg';
import React, { useState } from 'react';


function Footer(props) {
    const alphabet = [
        "a", "b", "c", "ç", "d", "e", "f", "g", "ğ",
        "h", "ı", "i", "j", "k", "l", "m", "n", "o",
        "ö", "p", "r", "s", "ş", "t", "u", "ü", "v",
        "y", "z","w","q"
    ];

    const [display,setDisplay] = useState(true);
    const handleClick = () => {
        setDisplay(!display);
        console.log(display);
        
    }
    let text = props.sendTextFooter;
    function createProgressBars() {
        if (props.characterCount === 0 || props.characterCount === undefined) {
            return (
                <span style={props.mode ? color : null} className='infoText textPreset4'>No characters found. Start typing to see letter density.</span>
            );
        }
        const counter = new Map();
        const letterArray = [];
        if (text !== undefined && text !== " ") {
            for (const x of text) {
                let contLet = x.toLowerCase()
                letterArray.includes(contLet) ? null : letterArray.push(contLet) ;
            }
            for (let letter of text) {
                let contLet = letter.toLowerCase()
                if (contLet !== " " && alphabet.includes(contLet)) {
                    counter.set(contLet, (counter.get(contLet) || 0) + 1);
                }
            }
            console.log(counter);
            const bars = [];
            let cnt = 0;
            for (let a of text) {
                if (a !== " " && alphabet.includes(a.toLowerCase())) {
                    cnt++;
                }
            }
            for (let [letter, count] of counter) {
                bars.push(progressBars(letter,count,cnt));
            }
            if (bars.length <= 5) {
                return bars;
            }
            else {
                return(
                    <div>
                        {bars[0]}
                        {bars[1]}
                        {bars[2]}
                        {bars[3]}
                        {bars[4]}
                        <div className="seeMoreCont">
                            <button className={`${display ? 'displayBlock' : 'displayNone'} seeMoreButton`} onClick={handleClick} type="button">
                                <span className={`${props.mode ? 'seeMoreLight' : 'seeMoreDark'} textPreset3`}>See more </span>
                                <i className={`${props.mode ? 'seeMoreLight' : 'seeMoreDark'} fa-solid fa-angle-down`}></i>
                            </button>
                        </div>
                        {bars.slice(5).map((item,index) => (
                            <div className={`${display ? 'displayNone' : 'displayBlock'}`} key={index}>
                                {item}
                            </div>
                        ))}
                        <div className="seeMoreCont">
                            <button className={`${display ? 'displayNone' : 'displayBlock'} seeMoreButton`} onClick={handleClick} type="button">
                                <span className={`${props.mode ? 'seeMoreLight' : 'seeMoreDark'} textPreset3`}>See less </span>
                                <i className={`${props.mode ? 'seeMoreLight' : 'seeMoreDark'} fa-solid fa-angle-up`}></i>
                            </button>
                        </div>
                    </div>
                    
                );
            }
        }
        return null;
    }


   function progressBars(letter,count,totalCount) {
        return (
            <div className="letterDensityContainer" key={letter}>
                <div className='progressBarContainer'>
                    <span className={` ${props.mode ? 'progressBarLetterDark' : 'progressBarLetter' } textPreset4`}>{letter.toUpperCase()}</span>
                    <div className="progressBar">
                        <div style={{width: `${100 *count / totalCount}%`}} className="progressBarValue"></div>
                    </div>
                    <span className={`${props.mode ? 'progressBarLetterDark' : 'progressBarLetter' } textPreset4`}>{count} {`(${Math.floor(100 *count / totalCount * 10) / 10}%)`}</span>
                </div>
            </div>
        );

    }

    const color = {
        color: 'var(--Neutral-900)'
    }

    return (
        <div>
            <div className="statsContainer">
                <div className="item totalCharacterDiv">
                    <img className="BgImg" src={TotalCharacter} alt="Total Character Pattern" />
                    <h2 className="itemNumber textPreset1">{`${props.characterCount === undefined || props.characterCount === 0 ? '00' : props.characterCount}`}</h2>
                    <span className="itemHeader textPreset3">Total Characters</span>
                </div>

                <div className="item WordCountDiv">
                    <img className="BgImg" src={WordCount} alt="Total Character Pattern" />
                    <h2 className="itemNumber textPreset1">{`${props.wordCount === undefined || props.wordCount === 0 ? '00' : props.wordCount}`}</h2>
                    <span className="itemHeader textPreset3">Word Count</span>
                </div>

                <div className="item SentenceCountDiv">
                    <img className="BgImg" src={SentenceCount} alt="Total Character Pattern" />
                    <h2 className="itemNumber textPreset1">{`${props.sentenceCount === undefined || props.sentenceCount === 0 ? '00' : props.sentenceCount}`}</h2>
                    <span className="itemHeader textPreset3">Sentence Count</span>
                </div>
            </div>
            <div className="infoArea">
                <h5 style={props.mode ? color : null} className={"textPreset2"}>Letter Density</h5>
            </div>
            {createProgressBars()}
        </div>
    );
}

export default Footer;