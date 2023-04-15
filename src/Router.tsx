import { Routes, Route } from 'react-router-dom'
import { Arquitetura } from './Arquitetura'
import { Sistemas } from './Sistemas'
import { Home } from './Home'

export function Router() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="arquitetura" element={<Arquitetura />} />
            <Route path="sistemas_operacionais" element={<Sistemas />} />
        </Routes>
    )
}