import React from "react"

function About() {
  return (
    <div className="flex min-h-screen items-center bg-[#161513]">
      {/* ABOUT CONTAINER */}
      <div className="mx-auto flex flex-col place-items-center py-[100px]">
        {/* IMAGE ICON */}
        <section className="flex place-content-center mb-5 md:mb-10">
          <div className="h-[213px] w-[213px] overflow-hidden rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
            <img src="https://i.imgur.com/4U5tBXC.png" alt="" />
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
          <a href="#" className="rounded-full bg-white px-[30px] py-[16px] text-lg font-semibold text-gray-800">
            Get In Touch
          </a>
          <a
            href="/resume/resume.pdf"
            download
            className="mt-3 rounded-full border-2 bg-transparent px-[30px] py-[16px] text-lg font-semibold text-white md:mt-0"
          >
            Download CV
          </a>
        </section>
      </div>
    </div>
  )
}

export default About
