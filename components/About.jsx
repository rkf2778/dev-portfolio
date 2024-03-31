import React from "react"

function About() {
  return (
    <div className="flex h-screen bg-[#161513]">
      <div className="mx-auto">
        <div className="mx-auto mb-[40px] mt-[98px] h-[213px] w-[213px] overflow-hidden rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
          <img src="https://i.imgur.com/4U5tBXC.png" alt="" />
        </div>
        <h1 className="max-w-screen-sm text-center text-[55px] font-extrabold text-white">
          I create{" "}
          <span className="bg-gradient-to-tr from-[#FF8660] to-[#8000FF] bg-clip-text text-transparent">
            websites{" "}
          </span>
          and <br />
          use
          <span className="bg-gradient-to-tr from-[#FF8660] to-[#8000FF] bg-clip-text text-transparent">
            {" "}
            AI{" "}
          </span>
          to{" "}
          <span className="bg-gradient-to-tr from-[#FF8660] to-[#8000FF] bg-clip-text text-transparent">
            {" "}
            power
          </span>{" "}
          amazing apps
        </h1>
        <p className="mx-auto mb-[54px] mt-[40px] max-w-lg text-center text-[18px] font-light text-[#C5C5C5]">
          Fullstack Web Developer + Data Scientist
        </p>
        <div className="text-center">
          <button className="mr-[18px] inline-block rounded-full bg-white px-[30px] py-[16px] text-[22px] font-semibold text-gray-800">
            Get In Touch
          </button>
          <a
            href="/resume/resume.pdf"
            download
            className="inline-block rounded-full border-2 bg-transparent px-[30px] py-[16px] text-[22px] font-semibold text-white"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
