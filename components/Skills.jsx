import Image from "next/image"
import React from "react"
import IconImage from "./ui/IconImage"
import images from "../utils/ImageGallery"

function Skills() {
  return (
    <section className="bg-gray-900">
      {/* CONTAINER */}
      <div className="mx-auto max-w-7xl p-16">
        {/* HEADING CONTAINER */}
        <div className="mx-auto px-6 text-gray-500">
          <div className="mb-7 text-center">
            <h2 className="text-5xl font-semibold leading-normal text-gray-950 dark:text-white">
              TECH STACK
            </h2>
            <p className="mt-1 text-gray-700 dark:text-gray-300">
              Jack of all trades, master of none
            </p>
          </div>

          {/* ICONS CONTAINER */}
          <div className="max-w-screen overflow-x-auto  px-10">
            {/* ICONS SECTION */}
            <div className="flex flex-wrap gap-2 p-3">
              {images.map((image, index) => (
                <div className="card-box flex-center" key={index}>
                  <IconImage
                    src={image}
                    height={16}
                    width={16}
                    alt={image.split("/")[1].split(".")[0]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
