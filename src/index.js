import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Show from './Show'
import Sandbox from './components/Sandbox'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route exact path="/sandbox-mode" element={<Sandbox />} />
        <Route path="*" element={<Show />} />
      </Routes>
    </BrowserRouter>
)
