"use client";

import { useState } from "react";
import { Submission, SubmissionCard } from "./submission-card";
import { SubmissionTab, SubmissionTabs } from "./submission-tabs";

const statuses: Submission["status"][] = ["Approved", "Rejected", "Awaiting Min Views", "Eligible for Reviews", "Deleted", "Rejected"];
const tabByStatus: Submission["tab"][] = ["Approved", "Rejected", "Pending", "Flagged", "Rejected", "Rejected"];
const submissions: Submission[] = statuses.map((status, index) => ({ id: index + 1, title: "Spring drop", creator: "Tessera", date: "May 26, 2026", duration: "00:19", views: "5K", payout: "$0.00", image: "/images/blueberries.png", status, tab: tabByStatus[index] }));

export function SubmissionsContent() {
  const [active, setActive] = useState<SubmissionTab>("All Clips");
  const visible = active === "All Clips" ? submissions : submissions.filter((submission) => submission.tab === active);
  return <><SubmissionTabs active={active} onChange={setActive} /><div className="submission-grid">{visible.map((submission) => <SubmissionCard key={submission.id} submission={submission} />)}</div></>;
}
