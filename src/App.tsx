
import React, { useEffect } from "react";
import { Layout } from 'antd';
import TodoList from './pages/TodoList';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios';
import { response } from "./mock";
function App() {
  useEffect(()=>{
   
    axios({
      url: '/getHomeData',
      method: 'GET'
    }).then(res=>{   
      console.log('获取数据完毕：', res.data);
    })

   
  },[]);
  return (
    <Layout>
      APP
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={ <TodoList id="1001" />} />
          </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
