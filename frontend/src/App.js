import React from 'react';
import './App.css';
import './tailwind.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskPage from './pages/TaskPage';
import Login from './pages/LoginPage';
import { DarkModeProvider } from './components/DarkModeContext';

import {Provider} from 'react-redux';
import store from './store'
import TaskAddPage from './pages/TaskAddPage';

function App() {
  return (

    <Provider store={store}>
      <DarkModeProvider>
    <Router>
     
        <Routes>
        <Route path='/' element={<TaskPage />} exact />
          <Route path='/login' element={<Login />} exact />
          <Route path='/task_create' element={<TaskAddPage />} exact />


      
        </Routes>
   
    </Router>
    </DarkModeProvider>
    </Provider>
  );
}

export default App;
