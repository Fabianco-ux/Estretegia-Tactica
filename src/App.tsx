import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ModuleForm from './pages/ModuleForm'
import EstrategiasForm from './pages/EstrategiasForm'
import DashboardForm from './pages/DashboardForm'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modulo/:key" element={<ModuleForm />} />
      <Route path="/estrategias" element={<EstrategiasForm />} />
      <Route path="/dashboard" element={<DashboardForm />} />
    </Routes>
  )
}
