import './App.css';
import SignInScreen from './login';
import ForgotPasswordScreen from './forgotPassword';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ChangePasswordScreen from './passwordChange';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignInScreen />} />
          <Route path="/forgot-password/" element={<ForgotPasswordScreen />} />
          <Route path="/change-password/" element={<ChangePasswordScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;