import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { route } from './routing';
import { themeDecider } from './Components/CommonHelper';
import Header from './Components/Header';

function App() {
  return (
    <div className={`App ${themeDecider()}`}>
      <div className={`container ${themeDecider()}`}>
      <Header />
        <BrowserRouter>
          <Routes>
            {route?.map((route) =>
              <Route key={route?.id} element={route?.component} path={route?.path} />
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
