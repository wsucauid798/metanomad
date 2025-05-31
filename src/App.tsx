import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StartPage from './pages/StartPage'
import Question1 from './pages/Question1.tsx'
import Question2 from './pages/Question2.tsx'
import Question3 from './pages/Question3.tsx'
import GeneratePage from './pages/GeneratePage.tsx'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/question1" element={<Question1 />} />
      <Route path="/question2" element={<Question2 />} />
      <Route path="/question3" element={<Question3 />} />
      <Route path="/generate" element={<GeneratePage />} />


      {/* Add a route for the SunlitForest component */}
           </Routes>
  )
}

export default App