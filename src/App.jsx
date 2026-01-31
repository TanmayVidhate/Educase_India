import React  from 'react'
import { Routes,Route } from 'react-router-dom';

//import views
import LandingPage from './Views/LandingPage';
import CreateAccount from './Views/CreateAccount';
import SigninPage from './Views/SigninPage';
import AccountSettings from './Views/AccountSettings';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create_account" element={<CreateAccount />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </>
  )
}

export default App
