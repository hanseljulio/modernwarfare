import { useState } from 'react';
import './App.css';
import MenuBar from './component/MenuBar';
import "./component/MenuBar/MenuBar.css"
import campaignSFX from "./audio/campaign.wav"
import multiplayerSFX from "./audio/multiplayer.wav"
import coopSFX from "./audio/coop.wav"
import menuMusic from "./audio/menumusic.mp3"

function App() {
  const [showCampaign, setShowCampaign] = useState<boolean>(false)
  const [showMultiplayer, setShowMultiplayer] = useState<boolean>(false)
  const [showCoop, setShowCoop] = useState<boolean>(false)
  
  function playCampaignSound() {
    new Audio(campaignSFX).play()
  }

  function playMultiplayerSound() {
    new Audio(multiplayerSFX).play()
  }

  function playCoopSound() {
    new Audio(coopSFX).play()
  }

  
  return (
    <div className="min-h-screen bg-slate-300 main-menu-div bg-[url('../public/img/12467021.jpg')] bg-cover">
      <iframe src="" allow="autoplay" id="audio" style={{display: "none"}}></iframe>
      <audio id="player" autoPlay loop src={menuMusic} />
      <div id='initClick' className="menu-div flex justify-around text-[#8aacca] text-[22px] font-medium mx-[50px] z-0">
        <div className="campaign-section h-screen" onMouseOver={() => {
          setShowCampaign(true)
          playCampaignSound();
        }} onMouseLeave={() => setShowCampaign(false)}>
          <h1 className={`bg-slate-700 px-10 py-1 flex items-center mt-[450px] ${showCampaign ? "hidden" : ""} `}>CAMPAIGN</h1>
          {showCampaign && <MenuBar video='./vids/MWCampaignNoSound.mp4' title='CAMPAIGN' description='Start the single player Campaign.'/>}
        </div>
        <div className="multiplayer-section" onMouseOver={() => {
          setShowMultiplayer(true)
          playMultiplayerSound();
        }} onMouseLeave={() => setShowMultiplayer(false)}>
          <h1 className={`bg-slate-700 px-10 py-1 flex items-center mt-[350px] ${showMultiplayer ? "hidden" : ""}`}>MULTIPLAYER</h1>
          {showMultiplayer && <MenuBar video='./vids/MWMultiplayerNoSound.mp4' title='MULTIPLAYER' description='Rank up, unlock new weapons, perks, killstreaks, and much more online.'/>}
        </div>
        <div className="coop-section" onMouseOver={() => {
          setShowCoop(true)
          playCoopSound();
        }} onMouseLeave={() => setShowCoop(false)}>
          <h1 className={`bg-slate-700 px-8 py-1 flex items-center mt-[500px] ${showCoop ? "hidden" : ""}`}>CO-OP</h1>
          {showCoop && <MenuBar video='./vids/MWCoopNoSound.mp4' title='CO-OP' description='Various cooperative modes and missions await.'/>}
        </div>
        
      </div>
      
    </div>
  );
}

// {/* <MenuBar video='./vids/MWCampaignNoSound.mp4' title='CAMPAIGN' description='Start the single player Campaign.'/>
//         <MenuBar video='./vids/MWCampaignNoSound.mp4' title='MULTIPLAYER' description='Rank up, unlock new weapons, perks, killstreaks, and much more online.'/>
//         <MenuBar video='./vids/MWCampaignNoSound.mp4' title='CO-OP' description='Various cooperative modes and missions await.'/> */}

export default App;
