import { client } from "@/lib/contentful/client"
import Work from "./Work"

export default async function Projects() {
  const data = await client.getEntries({ content_type: "productPage" })
  // console.log("TESTER:",tester[0].fields);
  const posts = await data?.items.map((item) => ({
    id: item?.sys?.id,
    title: item?.fields?.title,
    description: item?.fields?.description,
    image: {
      src: item?.fields?.image?.fields?.file?.url,
      alt: item?.fields?.image?.fields?.title,
      height: item?.fields?.image?.fields?.file?.details?.image?.height,
      width: item?.fields?.image?.fields?.file?.details?.image?.width,
    },
    techs: item?.fields?.techs,
    liveURL: item?.fields?.liveDemoUrl,
    githubUrl: item?.fields?.githubRepoUrl,
    kaggleUrl: item?.fields?.kaggleUrl,
  }))

  return (
    <section className="min-h-screen bg-[#161513]">
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-6 text-gray-500">
          <div className="text-center">
            <h2 className="text-5xl font-semibold text-gray-950 dark:text-white">
              Some of my works
            </h2>
            <p className="mt-2 text-xs text-gray-700 dark:text-gray-300">
              ©️ Powered by Contentful
            </p>
          </div>
          <div className="mx-auto mt-12 grid w-full justify-items-center gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-stretch">
            {posts.map((post) => (
              <Work key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
