import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import NavBar from './common/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import AboutPage from './about/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Container className="p-0" fluid="true">
        <ToastContainer autoClose={3000} hideProgressBar />
        <NavBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
