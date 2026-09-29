import {
  CampaignCard,
  CampaignCardProps,
} from "@/components/campaign/campaign-card";
import { FilterTabs } from "@/components/common/filter-tabs";

const campaigns: CampaignCardProps[] = Array.from(
  { length: 3 },
  (_, index) => ({
    image: "/images/blueberries.png",
    title: "Spring drop · raw studio cuts",
    creator: "Tessera",
    rate: "$2.40",
    paid: "$18,420",
    goal: "$50,000",
    applicants: 217 + index * 12,
    age: index === 1 ? "2 days ago" : "1 day ago",
    progress: 65,
  }),
);

export default function Page() {
  return (
    <main className="campaign-page">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />
      <section className="campaign-section">
        <div className="campaign-heading">
          <h1 className="!text-2xl !text-[#FAFAFA]">Campaigns</h1>
          <p className="!text-sm">Discover active campaigns from this Content Rewards community</p>
        </div>
        <FilterTabs />
        <div className="campaign-grid">
          {campaigns.map((campaign, index) => (
            <CampaignCard key={`${campaign.title}-${index}`} {...campaign} />
          ))}
        </div>
      </section>
    </main>
  );
}
