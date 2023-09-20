import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/HomePage/Home';
import RecipeList from './components/RecipePage/RecipeList';

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='/RecipePage' element={<RecipeList/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
