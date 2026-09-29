"use client";

import { Music2, Search } from "lucide-react";
import { useState } from "react";

const filters = [
  { label: "All" },
  { label: "TikTok", icon: Music2 },
  { label: "YouTube", textIcon: "▶" },
  { label: "Instagram", textIcon: "◎" },
  { label: "X", textIcon: "𝕏" },
];

export function FilterTabs() {
  const [active, setActive] = useState("All");
  return (
    <div className="filters-row">
      <label className="search-box">
        <Search aria-hidden="true" size={16} />
        <input aria-label="Search campaigns" placeholder="Search campaigns" />
      </label>
      <div className="filter-tabs" role="group" aria-label="Campaign platform">
        {filters.map(({ label, icon: Icon, textIcon }) => (
          <button
            className={`filter-button ${active === label ? "filter-button-active" : ""}`}
            key={label}
            onClick={() => setActive(label)}
            type="button"
          >
            {Icon ? (
              <Icon aria-hidden="true" size={14} />
            ) : textIcon ? (
              <span>{textIcon}</span>
            ) : null}
            {label !== "X" && label}
          </button>
        ))}
      </div>
    </div>
  );
}
