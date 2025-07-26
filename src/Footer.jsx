import TotalCharacter from './assets/images/pattern-character-count.svg';
import WordCount from './assets/images/pattern-word-count.svg';
import SentenceCount from './assets/images/pattern-sentence-count.svg';

function Footer(props) {

    const color = {
        color: 'var(--Neutral-900)'
    }

    return(
        <div>
            <div className="statsContainer">
                <div className="item totalCharacterDiv">
                    <img className="BgImg" src={TotalCharacter} alt="Total Character Pattern"/>
                    <h2 className="itemNumber textPreset1">00</h2>
                    <span className="itemHeader textPreset3">Total Characters</span>
                </div>

                <div className="item WordCountDiv">
                    <img className="BgImg" src={WordCount} alt="Total Character Pattern"/>
                    <h2 className="itemNumber textPreset1">00</h2>
                    <span className="itemHeader textPreset3">Word Count</span>
                </div>

                <div className="item SentenceCountDiv">
                    <img className="BgImg" src={SentenceCount} alt="Total Character Pattern"/>
                    <h2 className="itemNumber textPreset1">00</h2>
                    <span className="itemHeader textPreset3">Sentence Count</span>           
                </div>
            </div>
            <div className="infoArea">
                <h5 style={props.mode ? color : null } className={"textPreset2"}>Letter Density</h5>
                <span style={props.mode ? color : null } className='infoText textPreset4'>No characters found. Start typing to see letter density.</span>
            </div>
        </div>
    );
}

export default Footer;