import React, { useState } from 'react';
import { Header, About, Skills, ExampleProject, Resume, Services } from "./sections/constant"

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <main className={`h-full w-full ${isDarkMode ? "bg-primary" : "bg-gray-100"}`}>
      <Header
        isDarkMode={isDarkMode}
        toggleMode={toggleMode}
      />

      <section>
        <About 
          isDarkMode={isDarkMode} 
        />
      </section>

      <section>
        <Services 
          isDarkMode={isDarkMode}
        />
      </section>

      <section>
        <Skills
          isDarkMode={isDarkMode}
        />
      </section>

      <section>
        <ExampleProject />
      </section>

      <section>
        <Resume 
          isDarkMode={isDarkMode}
        />
      </section>
    </main>
  )
}

export default App