function Header(props){

    const styleDark = {
        color: 'var(--Neutral-100)',
        margin: '0'
    }

    const styleLight = {
        color: '#12131A',
        margin: '0'
    }

    const textAlligner = {
        textAlign: 'center'
    }

    return(
        <div style={textAlligner}>
            <h2 style={props.mode ? styleLight:styleDark} className="textPreset1">Analyze your text <br/>in real-time.</h2>
        </div>
    );

}

export default Header;