import React, { useState, useEffect } from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { useMoralis } from 'react-moralis'
import 'bulma/css/bulma.min.css';
import 'bulma-o-steps/bulma-steps.css';

// importing React Components
import Nav from './components/reactComponents/Navbar'
import HomepageDemo from './components/reactComponents/HomepageDemo'

//Using bulma alternative here to save effort. Plasmic version CreateNftForm is also there in repo
import CreateNftForm  from './components/reactComponents/CreateNftbulma'
import Mywallet  from './components/reactComponents/wallet'
import MarketPlace  from './components/reactComponents/marketplace'
import NftPage  from './components/reactComponents/NftPage'
import SellNftForm from './components/reactComponents/nftsale'
import BuyNftForm from './components/reactComponents/nftbuy'

//import HomePage from './components/reactComponents/HomePage'
//import EmailSignUp from "./components/reactComponents/EmailSignUp";
//import WebThreeAuth from './components/reactComponents/WebThreeAuth'
//import Login from './components/reactComponents/Login'
//import EmailLogin from './components/reactComponents/EmailLogin'


function App() {

  /*
  const [mainState, setMainState] = useState(() => {
    return {

      }
    })
  }
*/

  //const { auth, user, signup, login, hasAuthError, setUserData, logout, refetchUserData, userError } = useMoralis()

  /*
  useEffect(() => {
    console.log('APP JS User Error', userError)
  }, [userError])
*/

const [walletData, setwalletData] = useState({
        
})

const [token, settoken] = useState({
        
})

const [bar, setbar] = useState({

})


  return (
    <>
      <BrowserRouter>
        {<Nav />}       
        <Routes>
          <Route path="/" element={<HomepageDemo />} />
          <Route path="/createnft" element={<CreateNftForm />} />
          <Route path="/marketplace" element={<MarketPlace 
                                               token={token}
                                               settoken={settoken}/>} />
          <Route path="/nftpage" element={<NftPage 
                                            />} />
          <Route path="/wallet" element={<Mywallet 
                                          walletData={walletData}
                                          setwalletData={setwalletData}
                                          token={token}
                                          settoken={settoken}
                                          />} />
          <Route path="/sellNftForm" element={<SellNftForm 
                                              token={token}
                                              settoken={settoken}
                                              />} />
          <Route path="/buyNftForm" element={<BuyNftForm 
                                              token={token}
                                              settoken={settoken}
                                              />} />                                    
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
