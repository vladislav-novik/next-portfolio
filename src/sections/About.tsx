"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "TypeScript",
    iconType: HTMLIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: GithubIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: CSSIcon,
  },
  {
    title: "Framer Motion",
    iconType: ChromeIcon,
  },
];

const hobbies = [
  {
    title: "Traveling",
    emoji: "🌍",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "35%",
    top: "40%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "70%",
    top: "45%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "75%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "50%",
    top: "5%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28">
    <div className="container">
      <SectionHeader
        title="About me"
        eyebrow="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and how I can help you."
      />
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1 bg-transparent/15 group">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
              iconClassName="group-hover:rotate-45 transition-transform duration-300"
            />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2 bg-transparent/15 group">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to create unbelivable digital experiences."
              className=""
              iconClassName="group-hover:rotate-45 transition-transform duration-300"
            />
            <ToolboxItems
              items={toolboxItems}
              className=""
              itemsWrapperClassName="animate-move-left [animation-duration:15s] group-hover:[animation-play-state:paused]"
            />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="animate-move-right [animation-duration:15s] group-hover:[animation-play-state:paused]"
            />
          </Card>
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2 bg-transparent/15 group">
            <CardHeader
              title="Beyond the code"
              description="Explore my interest and hobbies beyond the digital realm."
              className="px-6 py-6"
              iconClassName="group-hover:rotate-45 transition-transform duration-300"
            />
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center 
                gap-2 px-6 cursor-grab
                bg-gradient-to-t from-green-500 to-sky-400 
                rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  whileDrag={{
                    cursor: "grabbing",
                  }}
                  dragConstraints={constraintRef}
                  dragTransition={{
                    bounceStiffness: 400,
                    bounceDamping: 6,
                  }}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 bg-transparent/15">
            <Image
              src={mapImage}
              alt="Map"
              className="h-full w-full object-cover object-left-top"
            />
            <div
              className="absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          size-20 rounded-full
          after:content-[''] after:absolute after:inset-0 
          after:outline after:outline-2 after:-outline-offset-2 after:rounded-full
          after:outline-gray-950/30"
            >
              <div
                className="absolute inset-0 rounded-full 
              bg-gradient-to-r from-green-500 to-sky-400
              -z-20 animate-ping [animation-duration:2s]"
              ></div>
              <div
                className="absolute inset-0 rounded-full 
              bg-gradient-to-r from-green-500 to-sky-400
              -z-10"
              ></div>
              <Image
                src={smileMemoji}
                alt="smiling memoji"
                className="size-20"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
    </div>
  )
};
