import { SOCIAL_MEDIA_LINKS } from "../constants"

const Footer = () => {
  return (
    <div className="mb-8 mt-20 ">
        

        <div className="flex items-center justify-center gap-10">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <a key={index} href={link.href} target="blank"
                rel="noopener noreferrer">
                    {link.icon}
                </a>
            ))}
        </div>
        <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
            All rights reserved.
        </p>
    </div>
  )
}

export default Footer
