import NavBar from "./components/NavBar"
import ProfileCard from "./components/ProfileCard"
import TypingBox from "./components/TypingBox"

const App = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#162013] dark group/design-root overflow-x-hidden">
      <NavBar/>
      {/* <TypingBox /> */}
      <div className="gap-1 px-6 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-80">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Top Scores</h2>
            <ProfileCard backGroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDotPrpk_jLnvBh09wkG2TvbOHt1HEo402XdJmok7Am8piSfFmYYOfSdFbHme8I1kpVt6Kr1SD9tV9wITS465Y-QifwwqO1L_j3iOmnT9qDkT4M7SyyhcN64gXTWmygkpMs_3IWzjppfVDrvT45oKTdvnJMDNWCrX7Rc9S3Fkg4T9mIkoR-s7cwSbXoO_tPbbRNVpvKQ1LhFEDrQTosSbXLQa1Z8Ukl0a4w228oCaXeKynV5VhqIUb-Vm38MISXYmv541V24Kw225Tm" name="Sophia Carter" wpm={45}/>
            <ProfileCard backGroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCoCohDHV_z2utp4BqE29uB-Gs6PwfCxNkegHxGwLLqPhG0xj6HUdlxBy7308ZXUoULiKrXOw0X0jSByYfhFOvkvOsNuT-zlySF7dbbxi2wSPQ07_O88bSmfzM22gVXXIIsZrkI0vD04dgqB8WClJIQbMzLScDMrFa8keHVjEWaJtXim44770waS3S6MlYlo5gMPSlXnTFs_Y08_FkrpQgD-bZpUKdkp_-NtZLwOH4WIDoZg8YdAn6-DJxnWxANPPHQIyTzymoQ_wxv" name="Ethan Bennett" wpm={42}/>
            <ProfileCard  backGroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAKISrLuX1nt_TyfgHyqJS8i_TAm2o2TAua98UdQjEIqyTfsc80GUkOzI0eiAxUfCt1PxZegjR3KWFJozWq03vf8ZkOrvJ0jrl2hXqQ7jD3N1pCMPPZNDN7UvIRYfoBngAd67eLOf4Hq04rkwzfJ5lZdSPJ_MS0aH00GF2fozj5EUK4Ch-9jiqpnPTuUh1vGNVyfbUdumkcedaTLIxtDjEn7c5aoZQbgal4wESoDxVCoVCFlolJw5PBeqZFZqTFW0b9_wZjBsYWyq38" name="Olivia Hayes" wpm={40}/>
            <ProfileCard  backGroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAV-KjPcG8KStfAV7lhZmwcK3aq2fPV_TQdHjZjQSmyP7J2c-_02HV_Hq75cRiJCa-OUPg9PuJoSfVGpdWNJA-MAr9DBlLAjv4hRv7zCzaWB1ks_DMyxfrgnnbaEqRhsfxKoqw6anW1HLE_Q_P6D7KuaaBxVmLC3wnH8GA8PSMTMIXsSTq0C5CH1YThldAR0foSP1hKoa0Hh04_gN13Oy2pD4Kb3xyjVyzyHge92E_nzHcJpgPQLyp_OiD6x6VVbK_FbVhKysitIUh_" name="Liam Foster" wpm={38}/>
            <ProfileCard  backGroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCLBxXexn8hH73dithSiSM31BZsnojktpULsfGo6MJJGPGEQHfBEkmI81wEJkcKfs36TfWHQsdZO2aCdtscrf9lLgrZxp8nfYMTaMuo4pdJuRf1TXYQdU8cGc-tjpKqpmrbHta9D0ErS3Tl578lY8yWOoKjezQICsu84C0P75ZoYZXPHVKwdTRU7adLshClKHNri4H5ojE7TJbnEoAe7N0G3KKPEeKzJTtsFWkCubDAml3DZBvWp1c2xSOhAR1DC18mbhJWKHmkPjgn" name="Ava Harper" wpm={35}/>
        </div>
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">Typing Speed Test</h2>
          <TypingBox/>
        </div> 
      </div>
    </div>
  )
}

export default App
