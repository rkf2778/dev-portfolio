import React from "react";

function About() {
  return (
    <div className="flex min-h-screen bg-[#161513]">
      <div className="mx-auto">
        <div className="mx-auto mb-[40px] mt-[98px] h-[213px] w-[213px] overflow-hidden rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
          <img src="https://i.imgur.com/4U5tBXC.png" alt="" />
        </div>
        <h1 className="max-w-screen-sm text-center text-[55px] font-extrabold text-white">
          I create{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
            websites{" "}
          </span>
          and <br />
          use
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
            {" "}
            AI{" "}
          </span>
          to make amazing apps
        </h1>
        <p className="mx-auto mt-[40px] mb-[54px] text-[18px] font-light text-[#C5C5C5] text-center max-w-lg">
          Fullstack Web Developer + Data Scientist
        </p>
        <div className="text-center">
          <button className="text-gray-800 inline-block px-[30px] py-[16px] mr-[18px] bg-white rounded-full font-semibold text-[22px]">
            Get In Touch
          </button>
          <a
            href="/resume/resume.pdf"
            download
            className="text-white inline-block px-[30px] py-[16px] bg-transparent border-2 rounded-full font-semibold text-[22px]"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
