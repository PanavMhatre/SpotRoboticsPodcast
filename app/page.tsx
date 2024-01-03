import NavBar from "./components/NavBar";
import Image from "next/image";
import Logo from "./assets/Podcast.png";
import PanavImage from "./assets/PanavSquareCircleTheme.png";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <section className="bg-secondary">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src={Logo}
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7 ml-14">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              <strong className="text-white">Spot Robotics Podcast</strong>
            </h1>
            <div className="flex items-center">
              <Image
                src={PanavImage}
                width={50}
                height={50}
                alt="Picture of the author"
                className="rounded-full mr-3"
              />
              <div>
                <p className="text-sm text-white">
                  <strong>
                    <em>Hosted by</em>
                  </strong>
                </p>
                <p className="text-sm text-white">
                  <strong className="text-white">Panav Mhatre</strong>
                </p>
              </div>
            </div>
            <button
              type="button"
              className="mt-4 w-90 text-white bg-primary hover:bg-primary focus:outline-none focus:ring-4 
              focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-4 mb-2"
            >
              <strong>Subscribe to Podcast</strong>
            </button>
            <p className=" mt-5 max-w-2xl mb-2 font-light text-whit lg:mb-8 md:text-lg lg:text-xl">
              <strong className="text-white">
                Interviews with professionals in the fields of business and
                technology to learn about how to succeed in the field.
              </strong>
            </p>
            <div className="flex items-center">
              <a className="inline-flex items-center justify-center  py-3 mr-3 text-base font-medium text-center text-whit rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                <strong className="text-white">Follow Panav</strong>
                <svg
                  className="w-6 h-6 ml-2 -mr-1 text-white"
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
              <ul className="flex">
                <a href="https://www.linkedin.com/in/panav-mhatre-70982b243/">
                  <li className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="50px"
                      height="40px"
                    >
                      <path
                        fill="#0288D1"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                      />
                      <path
                        fill="#FFF"
                        d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                      />
                    </svg>
                  </li>
                </a>
                <li className=""></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pl-40 pr-40 mt-10">
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
      <Footer></Footer>
    </div>
  );
}
