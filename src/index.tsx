import { createRoot } from 'react-dom/client';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { App } from './App';

const Router = process.env.NODE_ENV === 'production'
  ? BrowserRouter
  : HashRouter;

createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <Router>
      <App />
    </Router>,
  );
