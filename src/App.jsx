import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { route } from './routing';

function App() {
  return (
    <div className='App dark'>
      <div className="container dark">
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
