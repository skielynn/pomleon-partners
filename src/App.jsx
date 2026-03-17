import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import './App.css';
import Homepage from "./pages/Homepage";
import PageFooter from './components/Footer';
import AboutPage from './pages/AboutPage';

function App() {
   return (
    <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    <PageFooter />
    </BrowserRouter>
   )
}

export default App 