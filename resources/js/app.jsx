/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import './components/Example';


import './bootstrap';
import '../css/app.css'

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './layouts/App.jsx'

if(document.getElementById('app')) {
    ReactDOM.createRoot(document.getElementById('app')).render(
        <Router>
            <App />
        </Router>
    );

}