import React, {useContext, useState}from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/HomePage/Home';
import RecipePage from './components/RecipePage/RecipePage';
import MealTable from './components/MealPlannerPage/MealTable';
import AuthContext from './store/authContext';
import LandingPage from './components/Landing/LandingPage';

import Modal from './components/Modal/Modal';


function App() {
  const { state } = useContext(AuthContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="App">
    <Header isModalOpen={isModalOpen} setModalOpen={setModalOpen} openModal={openModal}/>
    <Routes>
      <Route index element={<LandingPage />}></Route>
      <Route path='/Home' element={<Home />}></Route>
      <Route path='/RecipePage' element={<RecipePage/>}></Route>
      <Route path='/Meal Planner' element={!state.token ? 'Please Log in': <MealTable/>}></Route>
    </Routes>
    
    </div>
  );
}

export default App;
