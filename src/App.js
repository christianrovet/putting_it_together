import React from 'react';
import './App.css';

import Personcard from './components/Personcard';

function App() {
  return (
    <div className="App">
      <Personcard first_name = {'Jane'} last_name = {'Doe'} age = {45} hair_color = {'Black'}/>
      <Personcard first_name = {'John'} last_name = {'Smith'} age = {88} hair_color = {'Brown'}/>
      <Personcard first_name = {'Millard'} last_name = {'Fillmore'} age = {50} hair_color = {'Brown'}/>
      <Personcard first_name = {'Maria'} last_name = {'Smith'} age = {62} hair_color = {'Brown'}/>
    </div>
  );
}

export default App;
