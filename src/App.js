import logo from './logo.svg';
import './App.css';
import Layout, { Home } from './components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Profile from './pages/Profile';
import Main from './pages/Profile';

function App() {
  return (
    <Router>
    <div className="App">
      <Layout>
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/*' element={<Main/>}/>
        </Routes>
      </Layout>
    </div>
    </Router>
  );
}

export default App;

