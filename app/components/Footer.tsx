function Footer() {
    return (
      <section className="relative bg-blueGray-200 pb-6">
        <div className="my-6 border-blueGray-300">
          <hr className="h-px my-8 bg-gray-200 border-0 " />
  
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-md text-blueGray-500 font-semibold py-1">
                © <span id="get-current-year">2023</span> Spot Robotics Podcast
                <br />
              </div>
              <a
                className="text-blueGray-500 font-semibold text-sm hover:text-gray-800 mt-7"
                href="https://www.linkedin.com/in/panav-mhatre-70982b243/"
              >
                {" "}
                An Initiative Created By Panav Mhatre
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Footer;