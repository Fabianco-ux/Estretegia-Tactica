import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ModuleForm from './pages/ModuleForm'
import EstrategiasForm from './pages/EstrategiasForm'
import DashboardForm from './pages/DashboardForm'
import StrategyList from './pages/StrategyList'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modulo/:key" element={<ModuleForm />} />
      <Route path="/estrategias/lista" element={<StrategyList />} />
      <Route path="/estrategias" element={<EstrategiasForm />} />
      <Route path="/dashboard" element={<DashboardForm />} />
    </Routes>
  )
}
