import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import SettingsPage from './routes/SettingsPage';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import About from './routes/About';
import HiveDetails from './routes/HiveDetails';

const routesPaths = {
  landing:'',
  settings:'settings',
  about:'about',
  hiveDetails: 'details'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={`/${routesPaths.landing}`} element={<LandingPage/>}/>
          <Route path={`/${routesPaths.settings}`} element={<SettingsPage/>}/>
          <Route path={`/${routesPaths.about}`} element={<About/>}/>
          <Route path={`/${routesPaths.hiveDetails}`} element={<HiveDetails/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
