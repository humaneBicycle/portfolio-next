import { Project } from "../models/Project";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function ProjectCard( {project} : { project: Project }) {
  return (
    <Card className="flex-[45%] my-2 mr-2 p-4 max-w-[50%]">
      <div className="flex justify-between">
        <div className="flex-1 text-lg ">
          <CldImage
            src="/ME_LINKEDIN.jpeg"
            width={0}
            height={0}
            alt="proj_img"
            className="w-full h-[30vh] rounded-[12px] mb-4 object-cover"
            sizes="100vh"
          />
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            {project.name}
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6">
            {project.description}
          </p>

          <ul className="my-8 ml-6 list-disc [&>li]:mt-2">
            {project.bullets.map((bullet,key) => (
              <li className="text-base text-[#7F888F]" key={key}>{bullet}</li>
            ))}
          </ul>

          {/* <blockquote className="mt-6 border-l-2 pl-6 italic mb-3">
            Testimonials
          </blockquote>
          <div className="mb-6">
            {project.testimonials.map((testimonial) => (
              <>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <Link
                  className="text-[#7F888F]"
                  target="_blank"
                  href={testimonial.url}
                  >
                  Testimonial Link
                </Link>
              </>
            ))}
          </div> */}

          <div className="flex flex-wrap mb-6">
            {project.techStack.map((tech,key) => (
              <Badge className="mr-1" key={key}>{tech}</Badge>
            ))}
          </div>
          <Link href={project.url} target="_blank">
            <Button className="mt-2">More</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}