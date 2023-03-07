import { Route, Routes } from 'react-router-dom'

import Home from '../Page/Home.jsx'
import Details from '../Page/Detail.jsx'

export default function App() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details />} />
        </Routes>
    )
}