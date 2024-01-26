import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value, isScrolled }) {
  const progressBarColor = "#2c3e50"; // Set your desired color here

  return (
    <div style={{ width: "100%" }}>
      <p className="lead mb-1 mt-2">{skill}</p>
      <ProgressBar
        className={!isScrolled ? "progress" : "progress-bar-animation"}
        now={value}
        variant="#2c3e50" // Change 'info' to your desired Bootstrap color variant
        // style={{ backgroundColor: progressBarColor }}
      />
    </div>
  );
}

export default SkillsBar;
