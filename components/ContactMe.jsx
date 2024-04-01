import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaKaggle } from "react-icons/fa6"
import { MdOutlineEmail } from "react-icons/md"

const socials = [
  { platform: "Github", link: "https://github.com/rkf2778" },
  { platform: "LinkedIn", link: "https://www.linkedin.com/in/rohitkf/" },
  { platform: "Kaggle", link: "https://www.kaggle.com/rkf2778" },
  { platform: "Email", link: "mailto:rohit.kf.dev@gmail.com" },
]

function ContactMe() {
  return (
    <div id="contacts" className="flex-center gap-16 bg-gray-900 p-10">
      {socials.map((social, index) => (
        <div
          key={index}
          id="contact"
          className=" hover:underline hover:underline-offset-4"
        >
          <a href={social.link} className="flex-center gap-3">
            {social.platform == "Github" && <FaGithub className="size-10" />}
            {social.platform == "LinkedIn" && (
              <FaLinkedin className="size-10" />
            )}
            {social.platform == "Kaggle" && <FaKaggle className="size-9" />}
            {social.platform == "Email" && (
              <>
                <MdOutlineEmail className="size-14" />
                <span>{social.platform}</span>
              </>
            )}
          </a>
        </div>
      ))}
    </div>
  )
}

export default ContactMe
