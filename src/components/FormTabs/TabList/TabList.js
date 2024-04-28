import './TabList.css';

export default function TabList({ activeTab, setActiveTab }) { 
    const handleTabClick = (tabId) => {
        setActiveTab(tabId); 
    };

    return (
        <ul className="tab-list">
          <li className={activeTab === 'booking' ? 'is-active' : ''}>
            <button id="tab1" className="tab-btn" onClick={() => handleTabClick('booking')}>
              <span>Check availability</span>
            </button>
          </li>
          <li className={activeTab === 'meeting' ? 'is-active' : ''}>
            <button id="tab2" className="tab-btn" onClick={() => handleTabClick('meeting')}>
              <span>Book a meeting room</span>
            </button>
          </li>
          <li className={activeTab === 'contact' ? 'is-active' : ''}>
            <button id="tab3" className="tab-btn" onClick={() => handleTabClick('contact')}>
              <span>Contact us</span>
            </button>
          </li>
        </ul>
    );
}
