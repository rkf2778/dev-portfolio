"use client"
import Image from 'next/image'
 
const imageLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`
}
 
export default function IconImage(props) {
  return (
    <Image
      loader={imageLoader}
      alt="Icon"
      {...props}
    />
  )
}