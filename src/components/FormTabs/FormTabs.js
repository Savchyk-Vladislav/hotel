import './FormTabs.css';
import Tab1 from './Tab1/Tab1';
import Tab2 from './Tab2/Tab2';
import Tab3 from './Tab3/Tab3';
import TabList from './TabList/TabList';
import { useState } from 'react';

export default function FormTabs() {
    const [activeTab, setActiveTab] = useState('booking'); 

    return (
        <div className="secondary-background">
            <div className="form-tabs-container">
                <div className="tabs">
                    <a id='contact'></a>
                    <TabList activeTab={activeTab} setActiveTab={setActiveTab} /> 
                </div>
                <div className="tab-content">
                    {activeTab === 'booking' && <Tab1 />}
                    {activeTab === 'meeting' && <Tab2 />}
                    {activeTab === 'contact' && <Tab3 />}
                </div>
            </div>
        </div>
    );
}