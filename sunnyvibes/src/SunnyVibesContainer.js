import React from "react";

/**
 * SunnyVibesContainer
 * The main container for the SunnyVibes app; serves as the root UI and logic holder.
 * Will be expanded with city input, mood selection, weather & mood icons, and personalized messaging.
 * PUBLIC_INTERFACE
 */
function SunnyVibesContainer() {
  return (
    <div className="container" style={{ paddingTop: 120, paddingBottom: 64, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
      <div className="subtitle" style={{ color: "var(--base-light)", fontWeight: 500, fontSize: "1.1rem" }}>
        Weather Mood Booster
      </div>
      <h1 className="title" style={{ fontSize: "2.5rem", fontWeight: 600, margin: 0, lineHeight: 1.2, color: "var(--base-light)" }}>
        SunnyVibes
      </h1>
      <div className="description" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", textAlign: "center", maxWidth: 600 }}>
        Get an encouraging message tailored to your mood and the weather! Enter your city and select how you feel to get started.
      </div>
      {/* UI for City Input, Mood Dropdown, and Personalized Output will go here soon */}
    </div>
  );
}

export default SunnyVibesContainer;
