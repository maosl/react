
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import  TodoList  from './pages/TodoList';
import ThemeApp  from './pages/ThemeContext';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path={"/"} element={<TodoList />} />
        <Route path={"/ThemeApp"} element={<ThemeApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
