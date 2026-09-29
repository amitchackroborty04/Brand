import Image from "next/image";
import { Clock3, Music2, Users } from "lucide-react";

export type CampaignCardProps = {
  image: string;
  title: string;
  creator: string;
  category?: string;
  rate: string;
  paid: string;
  goal: string;
  applicants: number;
  age: string;
  progress: number;
};

export function CampaignCard({
  image,
  title,
  creator,
  category = "Music",
  rate,
  paid,
  goal,
  applicants,
  age,
  progress,
}: CampaignCardProps) {
  return (
    <article className="campaign-card">
      <div className="campaign-image-wrap">
        <Image
          alt="Fresh blueberries"
          className="campaign-image"
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
          src={image}
        />
        <span className="category-badge">{category}</span>
      </div>
      <div className="campaign-content">
        <div className="campaign-title-row">
          <h2 className="text-2xl text-[#FAFAFA]">{title}</h2>
          <span className="type-badge !text-sm !px-2 !rounded-tl-[10px] !rounded-br-[10px]  ">Clipping</span>
        </div>
        <p className="text-lg mt-6 flex items-center gap-2">
          {creator}{" "}
          <span className="w-4 h-4 bg-[#29DA7E] rounded-full flex items-center justify-center" aria-label="Verified">
            ✓
          </span>
        </p>
        <div className="rate-row">
          <div>
            <span className="eyebrow">CPM</span>
            <p className="rate">
              {rate}
              <small>/1k</small>
            </p>
          </div>
          <div className="platform-icons" aria-label="Supported platforms">
            <span>
              <Music2 size={13} />
            </span>
            <span>▶</span>
            <span>◎</span>
          </div>
        </div>
        <div className="payout-row">
          <span>Paid out</span>
          <strong>
            {paid}
            <small>/{goal}</small>
          </strong>
        </div>
        <div className="progress-track" aria-label={`${progress}% funded`}>
          <span style={{ width: `${progress}%` }} />
        </div>
        <div className="card-footer">
          <div className="campaign-meta">
            <span>
              <Users size={15} /> {applicants}
            </span>
            <span>
              <Clock3 size={15} /> {age}
            </span>
          </div>
          <button type="button">Join</button>
        </div>
      </div>
    </article>
  );
}
