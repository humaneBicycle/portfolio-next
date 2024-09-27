import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex w-full mt-12 justify-between">
        <div className="">
          <Link href="/">
            <b>Abhay Sood </b>| Full Stack Developer 
          </Link>
        </div>
        <div>
          <div className="px-4 flex">
            <Link
              href={"https://www.linkedin.com/in/abhayasood/"}
              target="_blank"
              className="mr-4"
            >
              <Linkedin className="text-[#7F888F] hover:text-[#fff] transition-all" />
            </Link>
            <Link
              href={"https://www.instagram.com/ahhay_sood__"}
              target="_blank"
              className="mr-4"
            >
              <Instagram className="text-[#7F888F] hover:text-[#fff] transition-all" />
            </Link>
            <Link href={"https://github.com/humaneBicycle"} target="_blank">
              <Github className="text-[#7F888F] hover:text-[#fff] transition-all" />
            </Link>
          </div>
        </div>
      </div>
      <hr className="mt-4 mb-12 w-full text-[#7F888F] h-[0px] border-2 border-[#7F888F]"></hr>
    </>
  );
}
