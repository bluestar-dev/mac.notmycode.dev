import Image from "next/image"

const Avatar = () => {
  return (
    <div className="h-32 w-32 md:h-48 md:w-48">
      <Image
        className="rounded-xl"
        width={64}
        height={64}
        quality={80}
        src="/pfp.jpeg"
        alt="Profile picture"
      />
    </div>
  )
}

export default Avatar