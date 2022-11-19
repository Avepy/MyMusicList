import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './routes/main';
import Redirect from './routes/redirect';
import store from './redux/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/main" element={<Main />} />
          <Route path="/redirect" element={<Redirect />} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
