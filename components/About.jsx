"use client"
import React from "react"
import ContentfulImage from "./ui/ContentfulImage"
import { Link } from 'react-scroll';
import IconImage from "./ui/IconImage";

function About() {
  return (
    <div className="flex min-h-screen items-center bg-[#161513]">
      {/* ABOUT CONTAINER */}
      <div className="mx-auto flex flex-col place-items-center py-[100px]">
        {/* IMAGE ICON */}
        <section className="flex place-content-center mb-5 md:mb-10">
          <div className="h-[213px] w-[213px] overflow-hidden rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
            {/* <ContentfulImage src="//i.imgur.com/4U5tBXC.png" alt="" height={213} width={213} /> */}
            <IconImage src="portfolio/profile.png" alt="" height={213} width={213} />
          </div>
        </section>
        {/* HEADING */}
        <section className="flex flex-col place-items-center">
          <h1 className="text-center text-2xl font-extrabold text-white md:text-[55px] md:leading-[80px]">
            I create{" "}
            <span className="bg-gradient-to-tr from-[#FF8660] to-[#8000FF] bg-clip-text text-transparent">
              websites{" "}
            </span>
            <br />
            and use
            <span className="bg-gradient-to-tr from-[#FF8660] to-[#8000FF] bg-clip-text text-transparent">
              {" "}
              AI{" "}
            </span>
            to <br />
            <span className="bg-gradient-to-tr from-[#FF8660] to-[#8000FF] bg-clip-text text-transparent">
              {" "}
              power
            </span>{" "}
            amazing apps
          </h1>
          {/* PARAGRAPH */}
          <p className="my-10 max-w-lg text-center md:text-[25px] font-light text-[#C5C5C5]">
            Fullstack Web Developer + Data Scientist
          </p>
        </section>
        {/* CTA SECTION */}
        <section className="flex-center flex-col gap-2 md:flex-row md:gap-5">
          <Link to="contacts" smooth={true} duration={500} offset={-50} className="cursor-pointer flex-center rounded-full bg-white px-[30px] py-[16px] text-lg font-semibold text-gray-800 hover:bg-black hover:text-white hover:border-white border-2">
            Get In Touch
          </Link>
          <a
            href="/resume/resume.pdf"
            download
            className="flex-center mt-3 rounded-full border-2 bg-transparent px-[30px] py-[16px] text-lg font-semibold text-white md:mt-0 hover:bg-gradient-to-tr from-[#FF8660] to-[#8000FF] hover:border-white'"
          >
            Download CV
          </a>
        </section>
      </div>
    </div>
  )
}

export default About
