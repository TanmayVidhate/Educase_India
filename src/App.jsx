import React  from 'react'
import { Routes,Route } from 'react-router-dom';

//import views
import LandingPage from './Views/LandingPage';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
