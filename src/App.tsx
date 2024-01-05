import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';
// eslint-disable-next-line import/no-cycle
import TabsPage from './components/TabsPage';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';

export interface Tab {
  id: string;
  title: string;
  content: string;
}

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  { id: 'tab-4', title: 'Tab 4', content: 'Some text 4' },
];

export const App = () => (
  <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        {/* eslint-disable-next-line max-len */}
        <Route path="/tabs" element={<PrivateRoute><TabsPage tabs={tabs} /></PrivateRoute>}>
          {tabs.map(tab => (
            // eslint-disable-next-line max-len
            <Route key={tab.id} path={tab.id} element={<div>{tab.content}</div>} />
          ))}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </>
);
