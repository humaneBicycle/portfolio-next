import { Blog } from "../models/Blog";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Image from "next/image";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Card className="flex-[45%] my-2 mr-2 p-4 max-w-[50%]">
      <div className="flex justify-between">
        <div className="flex-1 text-lg ">
          <Image
            src="/ME_LINKEDIN.jpeg"
            width={0}
            height={0}
            alt="proj_img"
            className="w-full h-[30vh] rounded-[12px] mb-4 object-cover"
            sizes="100vh"
          />
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            {blog.name}
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6">
            {blog.description}
          </p>
          <Link href={blog.url} target="_blank">
            <Button className="mt-2">More</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
