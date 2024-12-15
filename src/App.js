import React from 'react';
import { Route, Routes, Router, BrowserRouter, Outlet } from 'react-router-dom';
import './App.css';
import './normalise.css'
import Head from './page/Head_page/Head'
import Main from './page/Main/Main';
import Sing_in from './page/Sing_in/Sing_in';
import Sing_up from './page/Sing_up/Sing_up';
import Taskbar from './page/Taskbar/Taskbar';

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/Sing_in' element={<Sing_in />} />
      <Route path='/Sing_up' element={<Sing_up />} />
      <Route path='/Taskbar' element={<Taskbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
