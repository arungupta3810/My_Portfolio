import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { route } from './routing';
import { themeDecider } from './Components/CommonHelper';

function App() {
  return (
    <div className={`App ${themeDecider()}`}>
      <div className={`container ${themeDecider()}`}>
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
