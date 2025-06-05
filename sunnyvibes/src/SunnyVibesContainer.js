import React, { useState } from "react";

/**
 * SunnyVibesContainer
 * The main container for the SunnyVibes app; serves as the root UI and logic holder.
 * PUBLIC_INTERFACE
 */
function SunnyVibesContainer() {
  const [city, setCity] = useState("");
  const [mood, setMood] = useState("");

  return (
    <div
      className="container"
      style={{
        paddingTop: 120,
        paddingBottom: 64,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 24,
      }}
    >
      <div className="subtitle" style={{ color: "var(--base-light)", fontWeight: 500, fontSize: "1.1rem" }}>
        Weather Mood Booster
      </div>
      <h1 className="title" style={{ fontSize: "2.5rem", fontWeight: 600, margin: 0, lineHeight: 1.2, color: "var(--base-light)" }}>
        SunnyVibes
      </h1>
      <div className="description" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", textAlign: "center", maxWidth: 600 }}>
        Get an encouraging message tailored to your mood and the weather! Enter your city and select how you feel to get started.
      </div>

      <div className="sv-card">
        <form className="sv-form" autoComplete="off" onSubmit={e => e.preventDefault()}>
          <label className="sv-label" htmlFor="city-input">
            City
            <input
              id="city-input"
              className="sv-input"
              type="text"
              placeholder="Enter your city"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
          </label>
          <label className="sv-label" htmlFor="mood-select">
            Mood
            <select
              id="mood-select"
              className="sv-select"
              value={mood}
              onChange={e => setMood(e.target.value)}
            >
              <option value="" disabled>
                Select your mood
              </option>
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
              <option value="Tired">Tired</option>
              <option value="Anxious">Anxious</option>
              <option value="Excited">Excited</option>
            </select>
          </label>
          {/* Button to trigger output will be added in the next step */}
        </form>
      </div>
    </div>
  );
}

export default SunnyVibesContainer;
