import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.component';
import Nav from './components/nav.component';
import Login from './components/login.component';
import Register from './components/register.component';
import ForgotPassword from './components/forgot_password.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Routes>
              <Route path='/' Component={Home} />
              <Route path='/login' Component={Login} />
              <Route path='/register' Component={Register} />
              <Route path='/forgot_password' Component={ForgotPassword} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
