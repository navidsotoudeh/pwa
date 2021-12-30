import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
const App = () => {
  const [query, setQuery] = useState("");
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      console.log(data);
    }
  };
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPres={search}
      />
    </div>
  );
};
export default App;
