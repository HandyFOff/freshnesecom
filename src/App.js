import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Detail from './pages/Detail';
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog-detail' element={<BlogDetail/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/detail' element={<Detail/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </>
  )
}