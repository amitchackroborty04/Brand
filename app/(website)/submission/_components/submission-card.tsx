import { CalendarDays, DollarSign, Eye, Play } from "lucide-react";
import Image from "next/image";

export type SubmissionStatus = "Approved" | "Rejected" | "Awaiting Min Views" | "Eligible for Reviews" | "Deleted";

export type Submission = {
  id: number;
  title: string;
  creator: string;
  date: string;
  duration: string;
  views: string;
  payout: string;
  image: string;
  status: SubmissionStatus;
  tab: "Pending" | "Approved" | "Rejected" | "Flagged";
};

const statusClass: Record<SubmissionStatus, string> = {
  Approved: "status-approved",
  Rejected: "status-rejected",
  "Awaiting Min Views": "status-waiting",
  "Eligible for Reviews": "status-review",
  Deleted: "status-rejected",
};

export function SubmissionCard({ submission }: { submission: Submission }) {
  return (
    <article className="submission-card">
      <div className="submission-media">
        <Image alt="Blueberries submission thumbnail" fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" src={submission.image} />
        <button className="submission-play" aria-label={`Play ${submission.title}`} type="button"><Play fill="currentColor" size={18} /></button>
        <span className="submission-duration">{submission.duration}</span>
      </div>
      <div className="submission-body">
        <div className="submission-title-row"><h2>{submission.title}</h2><span className={statusClass[submission.status]}>{submission.status}</span></div>
        <p className="submission-creator">{submission.creator} <i>✓</i></p>
        <p className="submission-date">Submitted on {submission.date}</p>
        <div className="submission-metrics">
          <div><Eye size={17} /><p><strong>{submission.views}</strong><small>Views</small></p></div>
          <div><DollarSign size={17} /><p><strong>{submission.payout}</strong><small>Estimated Payout</small></p></div>
        </div>
        <div className="submission-actions"><button aria-label="Open submission calendar" type="button"><CalendarDays size={16} /></button><button type="button">View Detail</button></div>
      </div>
    </article>
  );
}
