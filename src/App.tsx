import { Landing, Navbar, Questionizer, Summarizer } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'


export default function App() {
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/questionizer" element={<Questionizer />} />
      <Route path="/summarizer" element={<Summarizer />} />
    </Routes>
  </BrowserRouter>
}
