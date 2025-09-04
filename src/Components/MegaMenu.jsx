import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaRegPlayCircle } from "react-icons/fa";

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSub, setActiveSub] = useState(null);

  return (
    <div className="relative group">
      {/* Main Menu Trigger */}
      <button className="flex items-center font-semibold gap-2 px-4 py-2 hover:text-[#C81D25]">
        <FaBookOpen className="text-xl" />
        Courses
      </button>

      {/* Mega Menu */}
      <div className="absolute left-0 top-full hidden group-hover:flex w-[900px] bg-white shadow-lg border-t border-gray-200 z-50">
        
        {/* Left Sidebar */}
        <div className="w-56 border-r border-gray-200 p-4 space-y-4">
          <button
            className={`flex items-center gap-2 w-full text-left px-2 py-2 rounded-md ${
              activeMenu === "live" ? "bg-gray-100 text-[#C81D25]" : "hover:bg-gray-50"
            }`}
            onMouseEnter={() => setActiveMenu("live")}
          >
            <FaRegPlayCircle /> Classroom / Live Online
          </button>
          <button
            className={`flex items-center gap-2 w-full text-left px-2 py-2 rounded-md ${
              activeMenu === "recorded" ? "bg-gray-100 text-[#C81D25]" : "hover:bg-gray-50"
            }`}
            onMouseEnter={() => setActiveMenu("recorded")}
          >
            <FaRegPlayCircle /> Recorded
          </button>
        </div>

        {/* Middle Column - Categories */}
        <div className="w-56 border-r border-gray-200 p-4">
          {activeMenu === "live" && (
            <div className="space-y-3">
              <button
                className={`block w-full text-left px-2 py-2 rounded-md ${
                  activeSub === "sap" ? "bg-gray-100 text-[#C81D25]" : "hover:bg-gray-50"
                }`}
                onMouseEnter={() => setActiveSub("sap")}
              >
                SAP Technical
              </button>
              <button
                className="block w-full text-left px-2 py-2 rounded-md hover:bg-gray-50"
                onMouseEnter={() => setActiveSub("functional")}
              >
                SAP Functional
              </button>
              <button
                className="block w-full text-left px-2 py-2 rounded-md hover:bg-gray-50"
                onMouseEnter={() => setActiveSub("ds")}
              >
                Data Science
              </button>
            </div>
          )}

          {activeMenu === "recorded" && (
            <div className="space-y-3">
              <button className="block w-full text-left px-2 py-2 rounded-md hover:bg-gray-50">
                Web Development
              </button>
              <button className="block w-full text-left px-2 py-2 rounded-md hover:bg-gray-50">
                AI / ML
              </button>
            </div>
          )}
        </div>

        {/* Right Side - Sub Menus */}
        <div className="flex-1 grid grid-cols-2 gap-6 p-6">
          {activeSub === "sap" && (
            <>
              <div>
                <h4 className="font-semibold mb-2 text-gray-700">SAP Technical</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link to="#">ABAP</Link></li>
                  <li><Link to="#">BASIS</Link></li>
                  <li><Link to="#">HANA</Link></li>
                  <li><Link to="#">UI5/Fiori</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-700">More SAP</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link to="#">SAP Security</Link></li>
                  <li><Link to="#">SAP GRC</Link></li>
                  <li><Link to="#">SAP Cloud</Link></li>
                </ul>
              </div>
            </>
          )}

          {activeSub === "functional" && (
            <div>
              <h4 className="font-semibold mb-2 text-gray-700">SAP Functional</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="#">SAP FICO</Link></li>
                <li><Link to="#">SAP MM</Link></li>
                <li><Link to="#">SAP SD</Link></li>
              </ul>
            </div>
          )}

          {activeSub === "ds" && (
            <div>
              <h4 className="font-semibold mb-2 text-gray-700">Data Science</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="#">Python</Link></li>
                <li><Link to="#">Machine Learning</Link></li>
                <li><Link to="#">Deep Learning</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
