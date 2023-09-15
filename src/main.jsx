import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contact from "./routes/Contact.jsx"
import Detail from "./routes/Detail.jsx"
import Favs from "./routes/Favs.jsx"
import Home from "./routes/Home.jsx"
import NotFound from './components/Notfound.jsx'
import './index.css'
//npm install react-router-dom
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Navigate to={"/home"}/>}/>
          <Route path='/home' element={<Home />} />
          <Route path='/dentist/:id' element={<Detail />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/favs' element={<Favs />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
