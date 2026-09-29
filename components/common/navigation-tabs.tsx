"use client";

import { BarChart3, CircleUserRound, Compass, House, Package } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Home", icon: House, href: "/" },
  { label: "Submissions", icon: Package, href: "/submission" },
  { label: "Analytics", icon: BarChart3, href: "/analytics" },
  { label: "Discover", icon: Compass, href: "/discover" },
  { label: "Accounts", icon: CircleUserRound, href: "/accounts" },
];

export function NavigationTabs() {
  const pathname = usePathname();
  return (
    <nav className="nav-shell" aria-label="Primary navigation">
      {tabs.map(({ label, icon: Icon, href }) => {
        const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
        <Link aria-current={isActive ? "page" : undefined} className={`nav-tab text-base font-semibold ${isActive ? "nav-tab-active" : ""}`} href={href} key={label}>
          <Icon aria-hidden="true" size={16} strokeWidth={2.2} />
          <span>{label}</span>
        </Link>
      )})}
    </nav>
  );
}
