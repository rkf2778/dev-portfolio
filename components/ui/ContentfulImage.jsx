"use client"
import Image from "next/image"

const contentfulLoader = ({ src, width, quality }) => {
  return `https:${src}?w=${width}&q=${quality || 50}`
}

const ContentfulImage = (props) => {
  return <Image loader={contentfulLoader} {...props} />
}

export default ContentfulImage
