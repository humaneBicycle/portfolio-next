import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Projects({ children }: { children: React.ReactNode }) {
  return (
    <ContentLayout title="Projects">
      <Card className="rounded-lg border-none mt-6">
        <CardContent className="p-6">
          <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
            <div className="flex flex-col relative">
              image
              <div className="absolute -bottom-8 right-0">
                <Link
                  href="https://www.freepik.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground"
                >
                  Designed by Freepik
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
