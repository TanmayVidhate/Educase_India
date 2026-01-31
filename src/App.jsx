import React  from 'react'
import { Routes,Route } from 'react-router-dom';

//import views
import LandingPage from './Views/LandingPage';
import CreateAccount from './Views/CreateAccount';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create_account" element={<CreateAccount />} />
      </Routes>
    </>
  )
}

export default App
