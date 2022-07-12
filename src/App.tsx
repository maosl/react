
import React from "react";
import {BrowserRouter} from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { TodoList} from './pages/TodoList';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path={"/"} element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
