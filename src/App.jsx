import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { route } from './routing';
import { themeDecider } from './Components/CommonHelper';
import Header from './Components/Header';
import Layout from './Layout';

function App() {
  return (
    <div className={`App ${themeDecider()}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
            {route?.map((route) =>
              <Route key={route?.id} element={route?.component} path={route?.path} />
            )}
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
