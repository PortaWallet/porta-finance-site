import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SeoHead from './components/SeoHead'
import { LocaleProvider } from './lib/locale'

export default function App() {
  return (
    <LocaleProvider>
      <SeoHead />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ko" element={<Home />} />
      </Routes>
    </LocaleProvider>
  )
}
