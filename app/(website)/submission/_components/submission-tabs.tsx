const tabs = ["All Clips", "Pending", "Approved", "Rejected", "Flagged"] as const;
export type SubmissionTab = typeof tabs[number];

export function SubmissionTabs({ active, onChange }: { active: SubmissionTab; onChange: (tab: SubmissionTab) => void }) {
  return (
    <div className="submission-tabs" role="tablist" aria-label="Submission status">
      {tabs.map((tab) => <button aria-selected={active === tab} className={active === tab ? "active" : ""} key={tab} onClick={() => onChange(tab)} role="tab" type="button">{tab}<span>99</span></button>)}
    </div>
  );
}
