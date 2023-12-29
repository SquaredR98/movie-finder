import React, { useState } from "react";

import "./styles.scss";

export default function Switch({ data, onTabChange }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, idx) => {
    setLeft(idx * 100);
    setTimeout(() => {
      setSelectedTab(idx);
    }, 300);
    onTabChange(tab, idx);
  };
  return (
    <div className="switchTabs">
      <div className="tabItems">
        {data.map((tab, idx) => (
          <span
            key={idx}
            className={`tabItem ${selectedTab === idx ? 'active' : ''}`}
            onClick={() => activeTab(tab, idx)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }}></span>
      </div>
    </div>
  );
}
