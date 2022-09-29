import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignInPage from './pages/signInSecreen'
import SignUpPage from './pages/signUpSecreen'

const queryClient = new QueryClient()

let isLogin = true

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route exact path="/"
           element={
            <PrivateRoute
              Component={SignInPage}
              auth={isLogin}
            />}
          />
          <Route exact path="/signUp"
           element={
            <PrivateRoute
              Component={SignUpPage}
              auth={isLogin}
            />}
          />
        </Routes>
     </Router>
    </QueryClientProvider>
  );
}

const PrivateRoute = ({ Component, auth }) => {
  return auth ? <Component /> : <Navigate to="/login" />;
};

export default App;
