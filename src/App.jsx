import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      className="btn"
      onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
    >
      Toggle Theme
    </button>
  );
}

export default App;
