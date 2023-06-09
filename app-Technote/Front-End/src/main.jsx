import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import {disableReactDevtools} from '@fvilers/disable-react-devtools'

if(process.env.NODE_ENV === "production")disableReactDevtools()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
   <BrowserRouter>
       <Routes >
        <Route path='/*' element={<App/>}/>
       </Routes>
    </BrowserRouter>
   </Provider>
  </React.StrictMode>,
)
