import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[]
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);
  const tabContent = selectedTab ? selectedTab.content : 'Please select a tab';

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === tab.id })}
              key={tab.id}
            >
              <Link
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </>
  );
};