import React, { useState } from 'react';
import { Header, About, Skills, ExampleProject, Resume, Services } from "./sections/constant"

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <main className="h-full w-full bg-primary">
      <Header
        isDarkMode={isDarkMode}
        toggleMode={toggleMode}
      />

      <section>
        <About />
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
        <Resume />
      </section>
    </main>
  )
}

export default App