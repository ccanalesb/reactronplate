import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import App from './components/App.jsx';

window.onload = function(){
  ReactDOM.render(
    <HashRouter>
      <div className="unselectable">
        <App />
      </div>
    </HashRouter>, 
    document.getElementById('app'));
}
