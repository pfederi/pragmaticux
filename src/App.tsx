import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Principles from './pages/Principles'
import PrincipleDetail from './pages/PrincipleDetail'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/principles/:id" element={<PrincipleDetail />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

