import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import Header from "@/components/header";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function Resume() {
  return (
    <ScrollArea className="flex justify-center w-full h-[150vh]">
      <div className="dark w-[80%] h-full flex flex-col items-center">
        <Header />
        <div className="h-full w-full">
          <embed
            src="/resumes/resume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </ScrollArea>
  );
}
