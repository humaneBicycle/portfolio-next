import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

export default function Resume({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark">
      <AdminPanelLayout>{children}</AdminPanelLayout>
      
    </div>
  );
}
