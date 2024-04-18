import './App.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import LoginPage from './pages/loginpage/login';
import RegistrationPage from './pages/registration/registration'
import ForgotPassword from './pages/forgot_password/forgotpassword';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route exact path="/" element ={<LoginPage />}/>
       <Route exact path="/registration" element ={<RegistrationPage/>}/>
       <Route exact path="/forgotpassword" element ={<ForgotPassword/>}/>
      </Routes>
    </BrowserRouter> 
  );  
}
