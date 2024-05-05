import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Student Tribe - Online Project Sharing Platform",
    description:
      "Student Tribe is a web app that enables user to showcase a gist of their projects and connect to talent across world.",
    image: "/StudentTribe.png",
    github: "/",
    link: "https://studenttribe.netlify.app/",
  },
  {
    name: "Event Stash - An Event Management System",
    description:
      "Event Stash is a free, open-source tool for easy event planning and organization. It features user-friendly design, email integration, secure logins, and automated attendance tracking",
    image: "/EventStash.png",
    github: "https://github.com/wizaye/EventStash.io",
    link: "https://eventstash.netlify.app",
  },
  {
    name: "Catalyst",
    description: "Catalyst is a personality predictor app built using React and flask.",
    image: "/Catalyst.png",
    github: "/",
    link: "https://mystashwiz.netlify.app",
  },
  
  {
    name: "Rick GPT",
    description:
      "A discord bot powered by GPT-2 that engages in dynamic conversations inspired by Rick and Morty!",
    image: "/RickGpt.png",
    github: "https://github.com/wizaye/Rick-GPT-Bot",
    link: "https://discord.com/api/oauth2/authorize?client_id=1199756665646493816&permissions=2048&scope=bot",
  },
  {
    name: "Zap Trim",
    description:
     "ZapTrim is a user-friendly URL shortener app, simplifying link sharing and tracking. It enables users to create concise, customizable short URLs.",
    image: "/ZapTrim.png",
    github: "https://github.com/wizaye/ZapTrim",
    link: "/",
  },
  {
    name: "Threaded Net Hub",
    description:
      "A simple multi-threaded web server implementation in Java using a thread pool.",
    image: "/ThreadNet.png",
    github: "https://github.com/wizaye/ThreadedNetHub",
    link: "/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-indigo-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
