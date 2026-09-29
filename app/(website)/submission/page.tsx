import { SubmissionsContent } from "./_components/submissions-content";

export default function SubmissionPage() {
  return (
    <main className="submissions-page">
      <section className="submissions-content">
        <h1>Submissions</h1>
        <SubmissionsContent />
      </section>
    </main>
  );
}
