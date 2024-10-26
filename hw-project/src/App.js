import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Calendar from './pages/calendar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid>
    <Router style={{backgroundColor:'green'}}>
      
        <Header />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        
    </Router>
    </Container>
  );
}

export default App;
