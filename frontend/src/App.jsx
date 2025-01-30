import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { route } from './routing';
import { themeDecider } from './Components/CommonHelper';
import Layout from './Layout';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className={`App ${themeDecider()}`}>
      <Analytics />
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
