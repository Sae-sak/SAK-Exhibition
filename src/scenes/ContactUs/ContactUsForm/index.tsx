export default function ContactUsForm() {
  return (
    <section className=" relative text-gray-600 body-font">
      <div className="w-full mb-12 text-center col-center">
        <h1 className="mb-4 text-2xl font-bold text-gray-900 font-title sm:text-3xl title-font">
          Contact Us
        </h1>
      </div>
      <div className="mx-auto lg:w-1/2 md:w-2/3">
        <div className="flex flex-wrap ">
          <div className="w-1/2 p-2">
            <div className="relative">
              <label
                htmlFor="name"
                className=" font-body text-sm leading-8 text-gray-600"
              >
                Email *
              </label>

              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-1 leading-8 text-gray-700 transition-colors duration-200 ease-in-out border-b border-gray-600 outline-none focus:border hover:bg-white hover:ring-1 hover:ring-gray-500 hover:rounded hover:border-gray-500 focus:rounded focus:border-gray-500 focus:bg-white"
              />
            </div>
          </div>
          <div className="w-1/2 p-2">
            <div className="relative">
              <label
                htmlFor="name"
                className=" font-body text-sm leading-8 text-gray-600"
              >
                Password *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-1 leading-8 text-gray-700 transition-colors duration-200 ease-in-out border-b border-gray-600 outline-none focus:border focus:rounded focus:border-gray-500 focus:bg-white"
              />
            </div>
          </div>
          <div className="w-full m-4">
            <div className="relative">
              <label
                htmlFor="name"
                className=" font-body text-sm leading-8 text-gray-600"
              >
                Message *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-1 leading-8 text-gray-700 transition-colors duration-200 ease-in-out border-b border-gray-600 outline-none focus:border focus:rounded focus:border-gray-500 focus:bg-white"
              />
            </div>
          </div>

          <div className="w-full p-2">
            <button className="flex mx-auto text-lg text-black border-b border-b-black focus:outline-none hover:text-gray-500 hover:border-b-gray-500 font-mono">
              submit →
            </button>
          </div>
          <div className="w-full p-2 pt-8 mt-8 text-start border-gray-200">
            <a className="text-gray-700">example@email.com</a>
            <p className="my-5 leading-normal">
              49 Smith St.
              <br />
              Saint Cloud, MN 56301
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
