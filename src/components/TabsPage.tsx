import { FC } from 'react';
import {
  Link, Outlet,
} from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import { Tab } from '../App';

type Props = {
  tabs: Tab[]
};

const TabsPage:FC<Props> = ({ tabs }) => {
  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li key={tab.id} data-cy="Tab" className="is-active">
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        <Outlet />
      </div>
    </>
  );
};

export default TabsPage;
