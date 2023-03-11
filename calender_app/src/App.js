import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Calender from "./component/Calender/Calendar.js"
import { store } from './store/store';

function App() {
  return (
    <div>
      <Provider store={store} >
        <Calender />
      </Provider>
    </div>
  )
}

export default App