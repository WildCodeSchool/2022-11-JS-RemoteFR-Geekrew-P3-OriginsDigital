import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Profile() {
  const [activeTab, setActivTab] = useState("account");
  const handleTabClick = (tab) => {
    setActivTab(tab);
  };

  return (
    <div className="user-profile">
      <div className="avatar">
        <Link to="/">
          <img src="/path/to/avatar" alt="avatar" />
        </Link>
      </div>
      <div className="tabs">
        <button
          className={activeTab === "account" ? "active" : ""}
          onClick={() => handleTabClick("account")}
          type="button"
        >
          ACCOUNT
        </button>
        <button
          className={activeTab === "subscribe" ? "active" : ""}
          onClick={() => handleTabClick("subscribe")}
          type="button"
        >
          SUBSCRIBE
        </button>
        <button
          className={activeTab === "help" ? "active" : ""}
          onClick={() => handleTabClick("help")}
          type="button"
        >
          HELP
        </button>
        <button
          className={activeTab === "legal" ? "active" : ""}
          onClick={() => handleTabClick("legal")}
          type="button"
        >
          LEGAL SPACE
        </button>
        <button onClick={() => handleTabClick("logout")} type="button">
          LOGOUT
        </button>
      </div>
      <div className="tab-content">
        <Router>
          <Route path="/account" />
          <Route path="/subscription" />
          <Route path="/help" />
          <Route path="/legal" />
        </Router>
      </div>
    </div>
  );
}

export default Profile;
