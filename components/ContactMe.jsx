import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa"
import { FaKaggle } from "react-icons/fa6"
import { MdOutlineEmail } from "react-icons/md"

const socials = [
  { platform: "Github", link: "https://github.com/rkf2778" },
  { platform: "LinkedIn", link: "https://www.linkedin.com/in/rohitkf/" },
  { platform: "Kaggle", link: "https://www.kaggle.com/rkf2778" },
  { platform: "Email", link: "mailto:rohit.kf.dev@gmail.com" },
  { platform: "Blog", link: "https://vividrohit.medium.com" },
]

function ContactMe() {
  return (
    <>
      <div
        id="contacts"
        className="flex-center relative flex-wrap gap-16 bg-gray-900 p-10"
      >
        {socials.map((social, index) => (
          <div
            key={index}
            id="contact"
            className="hover:underline hover:underline-offset-4"
          >
            <a
              href={social.link}
              target="_blank"
              className="flex-center flex-wrap gap-3"
            >
              {/* GITHUB */}
              {social.platform == "Github" && (
                <FaGithub className="size-10 text-white" />
              )}
              {/* LINKEDIN */}
              {social.platform == "LinkedIn" && (
                <FaLinkedin className="size-10 text-white" />
              )}
              {/* KAGGLE */}
              {social.platform == "Kaggle" && (
                <FaKaggle className="size-9 text-white" />
              )}
              {/* EMAIL */}
              {social.platform == "Email" && (
                <>
                  <MdOutlineEmail className="size-14 text-white" />
                </>
              )}
              {social.platform == "Blog" && (
                <>
                  <FaMedium className="size-14 text-white" />
                </>
              )}
            </a>
          </div>
        ))}
      </div>
      <div className="flex-center bg-gray-900 pb-14 text-2xl text-white" id="love">
        ©️ Made with love
      </div>
    </>
  )
}

export default ContactMe
