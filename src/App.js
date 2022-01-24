import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import * as ROUTES from './constants/routes'
import MainPage from './pages/mainpage/mainpage'
import SignIn from './pages/sign-in/signIn'
import SignUp from './pages/sign-up/signUp'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.MAINPAGE} element={<MainPage />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
