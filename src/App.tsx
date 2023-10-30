import { useState } from 'react';
import './App.css';
import MenuBar from './component/MenuBar';
import "./component/MenuBar/MenuBar.css"
import campaignSFX from "./audio/campaign.wav"
import multiplayerSFX from "./audio/multiplayer.wav"
import coopSFX from "./audio/coop.wav"
import menuMusic from "./audio/menumusic.mp3"
import {BsGear} from "react-icons/bs"

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
    <div className="min-h-screen bg-slate-300 main-menu-div bg-[url('../public/img/12467021.jpg')] bg-cover relative z-0">
      <iframe src="" allow="autoplay" id="audio" style={{display: "none"}}></iframe>
      <audio id="player" autoPlay loop src={menuMusic} />
      <div className="account-name-section bg-transparent text-right absolute right-[100px] w-[500px] z-10 top-[50px]">
        <h1 className='text-white'>RamsaysaurusRex#1515</h1>
        <h1>FRIENDS LIST HERE</h1>
      </div>
      <div id='initClick' className="menu-div flex justify-around text-[#8aacca] text-[22px] font-medium mx-[50px]">
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
      <div className="footer-section flex justify-between text-right absolute w-full z-10 bottom-0 bg-slate-500 bg-opacity-[0.05] py-[18px]">
        <div className="button-section flex ml-[100px] gap-5 text-[12px]">
          <h1 className='text-white bg-gray-700 px-3 py-1 hover:cursor-pointer'>Quit to Desktop</h1>
          <h1 className='text-white bg-gray-700 px-3 py-1 flex items-center gap-2 hover:cursor-pointer'><BsGear />Options</h1>
        </div>
        <h1 className='text-white mr-[100px]'>Welcome to Modern Warfare. Stay frosty.</h1>
      </div>
    </div>
  );
}

// {/* <MenuBar video='./vids/MWCampaignNoSound.mp4' title='CAMPAIGN' description='Start the single player Campaign.'/>
//         <MenuBar video='./vids/MWCampaignNoSound.mp4' title='MULTIPLAYER' description='Rank up, unlock new weapons, perks, killstreaks, and much more online.'/>
//         <MenuBar video='./vids/MWCampaignNoSound.mp4' title='CO-OP' description='Various cooperative modes and missions await.'/> */}

export default App;
