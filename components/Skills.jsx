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
              SOME OF THE THINGS I KNOW
            </h2>
            <p className="mt-1 text-gray-700 dark:text-gray-300">
              Jack of all trades, master of none
            </p>
          </div>

          {/* ICONS CONTAINER */}
          <div className="mx-auto  max-w-[900px] overflow-x-auto px-10">
            {/* ICONS SECTION */}
            <div className="flex flex-wrap gap-6">
              {images.map((image, index) => (
                
                <div className="flex flex-col p-3 card-box md:size-32" key={index}> 
                  
                  <IconImage className="flex-center gap-3"
                    src={image}
                    height={16}
                    width={16}
                    alt={image.split("/")[1].split(".")[0]}
                  />
                  
                  <div className="text-sm flex-center whitespace-nowrap">{image.split("/")[1].split(".")[0]}</div>
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
