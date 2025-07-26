import OuterContainer from "./OuterContainer.jsx";
import InnerContainer from "./InnerContainer.jsx";
import Logo from "./Logo.jsx";
import Header from "./Header.jsx";
import TextArea from "./TextArea.jsx";
import Footer from "./Footer.jsx";
import React, {useState,useEffect} from 'react';


function App() {

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
 

  
  return(
    <>
      <OuterContainer>
        <InnerContainer>
          <Logo mode={toggleLightMode} onSend={handleLightMode}/>
          <Header mode={toggleLightMode}/>
          <TextArea mode={toggleLightMode}/>
          <Footer mode={toggleLightMode}/>
        </InnerContainer>
      </OuterContainer>
    </>
  );
}

export default App


