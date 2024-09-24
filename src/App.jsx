
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SingleBlog from './pages/SingleBlog'
import CreateBlog from './pages/CreateBlog'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<CreateBlog/>} />
        <Route path='/blog/:id' element={<SingleBlog />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
