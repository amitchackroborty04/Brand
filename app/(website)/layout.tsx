import { NavigationTabs } from "@/components/common/navigation-tabs";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="website-layout">
      <header className="website-topbar">
        <NavigationTabs />
        <div className="avatar-stack" aria-label="Signed in users">
          <div className="avatar avatar-one">A</div>
        </div>
      </header>
      {children}
    </div>
  );
}
