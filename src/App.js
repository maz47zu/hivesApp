import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import SettingsPage from './routes/SettingsPage';

const routesPaths = {
  landing:'',
  settings:'settings'
}

function App() {
  return (
    <BrowserRouter>
      {/* here will go the navbar */}
      <Routes>
        <Route path={`/${routesPaths.landing}`} element={<LandingPage/>}/>
        <Route path={`/${routesPaths.settings}`} element={<SettingsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
