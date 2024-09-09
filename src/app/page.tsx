import { ContentLayout } from "@/components/admin-panel/content-layout";
import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function About({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full items-center flex flex-col">
        <div className="flex flex-col h-full items-center w-[80%]">
          <Header />
          <div className="flex justify-between">
            <div className="flex-1 text-lg pr-4">
              <b>
                Hi, I &apos;m Abhay <br></br>I am a Computer Science Engineer and
                a Full stack developer.
              </b>
              <p className="my-8 text-[#7F888F]">Summary</p>
              <p className="my-8 text-[#7F888F]">
                {" "}
                As a full stack developer and software enthusiast, I am
                passionate about using my skills to build technology that is
                intuitive, scalable and could be used by the masses. With a
                background in engineering in Computer Science and having worked
                on several products with different startups, I have a strong
                foundation of understanding the development cycle of softwares,
                and solving several problems in the way. In addition to my
                technical skills, I am also interested in the business side of
                things, which helps me bring a holistic perspective to my work.
                I am always looking for new challenges and oppurtunities to
                learn and grow in the field of software.
              </p>
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
