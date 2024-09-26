import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Header from "@/components/header";
import { config } from "../../../config";
import BlogCard from "@/components/BlogCard";

export default function Projects() {
  return (
    <>
      <div className="w-full items-center flex flex-col">
        <div className="flex flex-col h-full items-center w-[80%]">
          <Header />
        </div>
        <div className="w-[80%]">
          Blogs 
          <hr className="mt-1 mb-12 w-[4%] text-[#7F888F] h-[0px] border-2 border-[#7F888F]"></hr>
        </div>
        <div className="w-[80%] flex flex-wrap">
          {config.blogs.map((blog) => (
            <BlogCard blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
}
