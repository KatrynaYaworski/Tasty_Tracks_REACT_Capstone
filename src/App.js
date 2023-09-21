import React, {useContext}from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/HomePage/Home';
import RecipePage from './components/RecipePage/RecipePage';
import Meals from './components/MealPlannerPage/Meals';
import AuthContext from './store/authContext';
import Modal from './components/Modal/Modal';


function App() {
  const { state } = useContext(AuthContext);
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='/RecipePage' element={<RecipePage/>}></Route>
      <Route path='/Meal Planner' element={!state.token ? <Modal>Please Log</Modal>: <Meals/>}></Route>
    </Routes>
    
    </div>
  );
}

export default App;
