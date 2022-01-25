import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import * as ROUTES from './constants/routes'
import MainPage from './pages/mainpage/mainpage'
import SignIn from './pages/sign-in/signIn'
import SignUp from './pages/sign-up/signUp'

import PrivateRoute from './containers/private-route'
import { ProvideAuth } from './utils/hooks/useAuth'

function App() {
  return (
    <Router>
      <ProvideAuth>
        <Routes>
          <Route path={ROUTES.MAINPAGE} element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        </Routes>
      </ProvideAuth>
    </Router>
  );
}

export default App;
