import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookDetails from './components/BookDetails/BookDetails';
import BookList from './components/Booklist/BookList';
import About from './pages/About/About';
import Home from './pages/Home/Home';


const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
          <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App