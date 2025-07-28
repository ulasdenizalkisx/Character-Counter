import OuterContainer from "./OuterContainer.jsx";
import InnerContainer from "./InnerContainer.jsx";
import Logo from "./Logo.jsx";
import Header from "./Header.jsx";
import TextArea from "./TextArea.jsx";
import Footer from "./Footer.jsx";
import React, {useState,useEffect} from 'react';


function App() {

  const [totalCharacters,setTotalCharacters] = useState()
  const handleCharacters = (e) => {
    setTotalCharacters(e);
  }

  const [totalWords,setTotalWords] = useState()
  const handleWords = (e) => {
    setTotalWords(e);
  }

  const [totalSentence,setTotalSentence] = useState()
  const handleSentence = (e) => {
    setTotalSentence(e);
  }

  const [toggleLightMode,setLightMode] = useState();
  const handleLightMode = () => {
    setLightMode(prev => !prev);
    
  };
  useEffect(() => {
  if (toggleLightMode !== undefined) {
        const imageUrl = toggleLightMode ? 
        "./bg-light-theme.png"
        : 
        "./bg-dark-theme.png"
        document.body.style.backgroundImage = `url(${imageUrl})`;
      };
  }, [toggleLightMode]);

  const [excludeSpace,setExcludeSpace] = useState();
  const handleExcludeSpaces = (e) => {
    setExcludeSpace(e);
  };

  const [text,setText] = useState()
  const handleSetText = (e) => {
    setText(e);
  }

  return(
    <>
      <OuterContainer>
        <InnerContainer>
          <Logo mode={toggleLightMode} onSendLogo={handleLightMode}/>
          <Header mode={toggleLightMode}/>
          <TextArea sendText={handleSetText} exSpace={excludeSpace} mode={toggleLightMode} onSendExcludeSpaces={handleExcludeSpaces} onSendSentences={handleSentence} onSendWords={handleWords} onSendCharacters={handleCharacters} />
          <Footer sendTextFooter={text} sentenceCount={totalSentence} wordCount={totalWords} characterCount={totalCharacters} mode={toggleLightMode}/>
        </InnerContainer>
      </OuterContainer>
    </>
  );
}

export default App


