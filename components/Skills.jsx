import IconImage from "./ui/IconImage"
import images from "../utils/ImageGallery"

function Skills() {
  return (
    <section className="bg-gray-900">
      {/* CONTAINER */}
      <div className="mx-auto max-w-7xl p-16">
        {/* HEADING CONTAINER */}
        <div className="">
          <div className="mb-7 text-center">
            <h2 className="text-5xl font-semibold leading-normal text-gray-950 dark:text-white">
              What i've played around with 😉
            </h2>
            <p className="mt-1 text-gray-700 dark:text-gray-300">
              <span className="bg-gradient-to-tr from-[#FF8660] to-[#8000FF] bg-clip-text text-transparent">
                Jack of all trades, master of none
              </span>
            </p>
          </div>

          {/* ICONS CONTAINER */}
          <div className="mx-auto  max-w-[900px] overflow-x-auto px-10">
            {/* ICONS SECTION */}
            <div className="flex flex-wrap gap-6">
              {images.map((image, index) => (
                <div
                  className="card-box flex flex-col p-3 md:size-32"
                  key={index}
                >
                  <IconImage
                    className="flex-center gap-3"
                    src={image}
                    height={16}
                    width={16}
                    alt={image.split("/")[1].split(".")[0]}
                  />

                  <div className="flex-center whitespace-nowrap text-sm">
                    {image.split("/")[1].split(".")[0]}
                  </div>
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
