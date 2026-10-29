import './App.scss';
import { themeDecider } from './Components/CommonHelper';
import Redirect from './Components/Redirect';
import { Analytics } from "@vercel/analytics/react"

// The portfolio has moved to https://arun-gupta.vercel.app.
// Every route on this old site now redirects there.
// To restore the old site, bring back the BrowserRouter setup from git history.
function App() {
  return (
    <div className={`App ${themeDecider()}`}>
      <Analytics />
      <Redirect />
    </div>
  );
}

export default App;
