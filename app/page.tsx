import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7 ml-14">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              <strong>Spot Robotics Podcast</strong>
            </h1>
            <div className="flex items-center">
              <img
                src="https://example.com/image.png"
                alt="example image"
                className="w-12 h-12 mr-4"
              />
              <div>
                <p className="text-sm text-gray-900 dark:text-gray-500 ">
                  <strong>
                    <em>Hosted by</em>
                  </strong>
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Panav Mhatre</strong>
                </p>
              </div>
            </div>
            <button
              type="button"
              className="mt-5 w-90 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 
              focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <strong>Subscribe to Podcast</strong>
            </button>
            <p className=" mt-5 max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              <strong>
                Interviews with professionals in the fields of business and
                technology to learn about how to succeed in the field.
              </strong>
            </p>
            <a className="inline-flex items-center justify-center  py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 ">
              <strong>Follow Panav</strong>
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="pl-40 pr-40 dark:bg-gray-900">
        <iframe
          className="border-radius:12px mb-5"
          src="https://open.spotify.com/embed/episode/4LjiyQlJqcsdkfXFOz67uv?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          className="border-radius:12px mb-5"
          src="https://open.spotify.com/embed/episode/7jOnKfZgSZVPufM71mCuu9?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          className="border-radius:12px mb-5"
          src="https://open.spotify.com/embed/episode/7jOnKfZgSZVPufM71mCuu9?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          className="border-radius:12px mb-5"
          src="https://open.spotify.com/embed/episode/1zMBFTSJK4Mo5Yerwn0GHu?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
