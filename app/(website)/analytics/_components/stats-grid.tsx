import { BadgeDollarSign, Eye, FileCheck2, Megaphone } from "lucide-react";

const stats = [
  { label: "TOTAL VIEWS", value: "1.91M", note: "+12.5% vs last month", icon: Eye },
  { label: "TOTAL EARNED", value: "$4,706", note: "paid + payable", icon: BadgeDollarSign },
  { label: "SUBMISSIONS", value: "42/38", note: "approved · 90% rate", icon: FileCheck2 },
  { label: "ACTIVE CAMPAIGNS", value: "5", note: "joined this period", icon: Megaphone },
];

export function StatsGrid() {
  return (
    <div className="analytics-stats">
      {stats.map(({ label, value, note, icon: Icon }) => (
        <article className="analytics-stat" key={label}>
          <div><span>{label}</span><strong>{value}</strong><small>{note}</small></div>
          <i><Icon size={18} /></i>
        </article>
      ))}
    </div>
  );
}
