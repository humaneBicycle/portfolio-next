import { ContentLayout } from "@/components/admin-panel/content-layout";
import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import {config} from "../../config";


export default function About() {
  return (
    <>
      <div className="w-full items-center flex flex-col">
        <div className="flex flex-col h-full items-center w-[80%]">
          <Header />
          <div className="flex justify-between mb-8">
            <div className="flex-1 text-lg pr-4">
              <b>{config.about.intro}</b>
              <div className="mt-8 mb-4 text-[#7F888F]">Summary</div>
              <p className="mt-4 text-[#7F888F]">{config.about.summary}</p>
              <ul className="my-8 ml-6 list-disc [&>li]:mt-2">
                {config.about.bullets.map((bullet) => (
                  <li className="text-base text-[#7F888F]">{bullet}</li>
                ))}
              </ul>
              <p className="mt-4 text-[#7F888F]">{config.about.outro}</p>
            </div>
            <div className="flex-1 rounded p-4">
              <Image
                src="/ME_LINKEDIN.jpeg"
                width={500}
                height={500}
                alt="Picture of the author"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
