"use client";

import { useState } from "react";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function PerformanceChart() {
  const [metric, setMetric] = useState<"Views" | "Payouts">("Views");
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const points = [{x:85,y:184},{x:230,y:178},{x:415,y:166},{x:665,y:174},{x:930,y:139},{x:1130,y:132}];
  return (
    <section className="performance-card">
      <div className="chart-heading">
        <div><span>VIEWS DELIVERED</span><strong>{metric === "Views" ? "1.91M" : "$4,706"}</strong></div>
        <div className="chart-tabs"><button className={metric === "Views" ? "active" : ""} onClick={() => setMetric("Views")}>Views</button><button className={metric === "Payouts" ? "active" : ""} onClick={() => setMetric("Payouts")}>Payouts</button></div>
      </div>
      <div className="chart-scroll">
        <div className="chart-canvas">
          <div className={`chart-tooltip ${hoveredPoint !== null ? "is-visible" : ""}`} style={hoveredPoint !== null ? { left: `${Math.min(78, Math.max(8, points[hoveredPoint].x / 12))}%` } : undefined}><small>3 UPLOADS · APR 18</small>{["5.4K", "5.6K", "5.6K"].map((value) => <div key={value}><span>▣</span><p>Market open reaction<small>Apr 18, 3:45 PM</small></p><strong>{value}</strong></div>)}</div>
          <svg viewBox="0 0 1200 350" role="img" aria-label="Views delivered from January to December">
            <defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#25d981" stopOpacity=".17"/><stop offset="1" stopColor="#25d981" stopOpacity="0"/></linearGradient></defs>
            {[60, 130, 200, 270, 340].map((y) => <line key={y} x1="0" x2="1200" y1={y} y2={y} stroke="#24282a" strokeWidth="1" />)}
            <path d="M0 188 C30 178 60 174 90 184 S150 181 190 181 S240 177 275 178 S310 167 350 173 S390 166 430 164 S480 152 520 154 S565 147 610 155 S655 182 700 165 S745 151 790 149 S840 138 880 139 S925 132 965 140 S1010 147 1045 139 S1090 142 1130 132 S1170 126 1200 116 L1200 340 L0 340 Z" fill="url(#chartFill)" />
            <path d="M0 188 C30 178 60 174 90 184 S150 181 190 181 S240 177 275 178 S310 167 350 173 S390 166 430 164 S480 152 520 154 S565 147 610 155 S655 182 700 165 S745 151 790 149 S840 138 880 139 S925 132 965 140 S1010 147 1045 139 S1090 142 1130 132 S1170 126 1200 116" fill="none" stroke="#25d981" strokeWidth="3" strokeLinecap="round" />
            {points.map(({x,y}, index) => <g className="chart-point" key={x} onMouseEnter={() => setHoveredPoint(index)} onMouseLeave={() => setHoveredPoint(null)}><circle className="chart-point-hitbox" cx={x} cy={y} r="15"/><circle cx={x} cy={y} r="7" fill="white" stroke="#25d981" strokeWidth="2"/></g>)}
          </svg>
          <div className="y-labels"><span>1,000</span><span>800</span><span>600</span><span>400</span><span>200</span><span>0</span></div>
          <div className="month-labels">{months.map((month) => <span key={month}>{month}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
