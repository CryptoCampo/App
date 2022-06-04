import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Welcome from './Components/Welcome';
import NavBarCC from './Components/Layouts/NavBar';
import DashBoard from './Components/DashBoard';
import WhitePapper from './Components/Whitepapper';
import Inverti from './Components/Inverti';
import MarketPlace from './Components/MarketPlace';
import Ayuda from './Components/Ayuda';








function App() {
  return (
<div className='App'>

  <BrowserRouter>
  <Routes>
    <Route path='/' element={ <NavBarCC />}>
    <Route index element={<Welcome />} />
      <Route path='Whitepapper' element={<WhitePapper />} />
      <Route path='Inverti' element={<Inverti />} />
      <Route path='Marketplace' element={<MarketPlace />} />
      <Route path='DashBoard' element={<DashBoard />} />
      <Route path='Ayuda' element={<Ayuda />} />
      <Route path='*' element={<Navigate replace to='/' />} />
    </Route>
  </Routes>
  </BrowserRouter>

</div>
  );
}

export default App;
