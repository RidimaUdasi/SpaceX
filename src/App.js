import Header from './Components/shared-components/Header';
import Routing from './Components/main/Routing';

import {
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  return (
    <div>
        <Router>
          <Header/>
          <Routing/>
        </Router> 
    </div>
  );
}

export default App;
