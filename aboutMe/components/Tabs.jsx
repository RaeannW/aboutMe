import React from "react";
import Development from "./Development";
import Design from "./Design";
import BlogJourney from "./BlogJourney";
import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Development" },
    { id: "tab2", label: "Graphic Design" },
    { id: "tab3", label: "Blog of Blogs" },
  ];

  const tabsContent = {
    tab1: (
      <>
        <Development />
      </>
    ),
    tab2: (
      <>
        <Design />
      </>
    ),
    tab3: (
      <>
        <BlogJourney />
      </>
    ),
  };

  return (
    <>
      <div className="w-full flex items-center bg-amber-50 ">
        <div className="w-full bg-amber-50 m-10 shadow-xl flex flex-col align-top h-24">
          {/* tabs */}

          <div className="flex flex-row bg-pink-200 ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 font-semibold ${
                  activeTab === tab.id
                    ? "border-b-2 text-purple-500 shadow-2xl"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* content */}
          <div className="flex flex-col px-4">
            {tabsContent[activeTab]}
            </div>
        </div>
      </div>
    </>
  );
}
