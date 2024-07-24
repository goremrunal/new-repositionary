import React from "react";
import Header from "./Components/Header/Header.jsx"; // Import Header component

function App() {
  return (
    <div className="min-h-screen bg-light-fill dark:bg-dark-fill text-light-base dark:text-dark-base">
      {/* Header Component */}
      <header className="">
        <Header />
      </header>
    </div>
  );
}

export default App;
