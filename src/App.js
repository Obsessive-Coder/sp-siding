// Components.
import { Routes, Route, Link } from 'react-router-dom';
import { Contact, Home, Services } from './pages';

// Styles, utils, and other helpers.
import './App.css';

// Route data.
const routes = [{
  path: '/',
  Component: Home,
}, {
  path: '/contact',
  Component: Contact,
}, {
  path: '/services',
  Component: Services,
}];

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
