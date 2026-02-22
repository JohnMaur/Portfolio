import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, About, Skills, ExampleProject, Resume, Services } from "./sections/constant";
import { Macts } from "./Projects";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={`h-full w-full ${isDarkMode ? "bg-primary" : "bg-gray-100"}`}>
      <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <section><About isDarkMode={isDarkMode} /></section>
              <section><Services isDarkMode={isDarkMode} /></section>
              <section><Skills isDarkMode={isDarkMode} /></section>
              <section><ExampleProject isDarkMode={isDarkMode}/></section>
              <section><Resume isDarkMode={isDarkMode} /></section>
            </>
          }
        />

        {/* Project Page */}
        <Route path="/macts" element={<Macts isDarkMode={isDarkMode} />} />
      </Routes>
    </main>
  );
};

export default App;
