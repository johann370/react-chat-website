import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ChatPage from "./pages/ChatPage";


function App() {
  const url = "http://127.0.0.1:8000";
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage url={url} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/chat" element={<ChatPage url={url} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
      </Routes>
    </Router>
  )
}

export default App;
