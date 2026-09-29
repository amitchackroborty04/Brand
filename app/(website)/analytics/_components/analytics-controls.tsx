"use client";

import { ChevronDown, Download, Music2 } from "lucide-react";
import { useState } from "react";

const platforms = [
  { label: "TikTok", icon: <Music2 size={15} /> },
  { label: "YouTube", icon: <span>▶</span> },
  { label: "Instagram", icon: <span>◎</span> },
  { label: "X", icon: <span>𝕏</span> },
];

export function AnalyticsControls() {
  const [activePlatforms, setActivePlatforms] = useState(["TikTok", "YouTube", "Instagram"]);
  const toggle = (label: string) => setActivePlatforms((current) => current.includes(label) ? current.filter((item) => item !== label) : [...current, label]);

  return (
    <div className="analytics-controls">
      <div className="analytics-platforms" aria-label="Filter by platform">
        {platforms.map(({ label, icon }) => (
          <button className={activePlatforms.includes(label) ? "selected" : ""} key={label} onClick={() => toggle(label)} type="button">{icon}{label !== "X" && label}</button>
        ))}
      </div>
      <div className="analytics-selects">
        <button type="button">Range : <strong>Last 28 days</strong><ChevronDown size={15} /></button>
        <button type="button">Campaign : <strong>All</strong><ChevronDown size={15} /></button>
        <button className="export-button" type="button"><Download size={17} />Export CSV</button>
      </div>
    </div>
  );
}
