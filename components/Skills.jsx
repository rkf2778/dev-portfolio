import Image from "next/image"
import React from "react"
import IconImage from "./ui/IconImage"

function Skills() {
  return (
    <section className="min-h-screen bg-gray-900">
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 text-gray-500">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-950 dark:text-white">
              TECH
              <br className="hidden sm:block" /> STACKS
            </h2>
            <p className="mt-6 text-gray-700 dark:text-gray-300">
              Jack of all trades, master of none
            </p>
          </div>

          {/* ICONS CONTAINER */}
          <div className="relative mx-auto mt-12 max-w-screen overflow-x-auto border-4 border-sky-500 px-10">
            {/* ICONS SECTION */}
            <div className="flex gap-2 p-3 flex-wrap border-4 border-red-500">
              <div className="card-box flex-center">
                Anything
              </div>
              <div className="card-box flex-center">
                Anything
              </div>
              <div className="card-box flex-center">
                Anything
              </div>
              <div className="card-box flex-center">
                Anything
              </div>
              <div className="card-box flex-center">
                Anything
              </div>
              <div className="card-box flex-center">
                Anything
              </div>
              <div className="card-box flex-center">
                Anything
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
