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
      <div className="w-full flex flex-col items-center bg-light py-10 px-20">

        <div className="flex flex-row text-center mb-10">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            voluptate ut repellat. Vero deleniti, reiciendis.
          </p>
        </div>

        <div className=" bg-white shadow-lg flex flex-col align-top">
          {/* tabs */}
          <div className="flex md:flex-row flex-col bg-dark px-20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-4 hover:text-teal-light ${
                  activeTab === tab.id
                    ? "text-orange-light"
                    : "text-white"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* content */}
          <div className="flex flex-col px-4">{tabsContent[activeTab]}</div>

        </div>

      </div>
    </>
  );
}
