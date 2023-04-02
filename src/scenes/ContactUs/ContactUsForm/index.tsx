export default function ContactUsForm() {
  return (
    <section className="relative body-font">
      <div className="w-full mb-12 text-center col-start">
        <h1 className="mb-4 text-2xl font-bold font-title sm:text-xl title-font">
          Contact Our Team
        </h1>
      </div>

      <div className="mx-auto">
        <div className="flex flex-wrap md:mx-4">
          <div className="w-1/2 p-2">
            <div className="relative">
              <label htmlFor="name" className="text-sm leading-8 font-body">
                Email *
              </label>

              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-1 leading-8 transition-colors duration-200 ease-in-out border-b outline-none font-body focus:border focus:rounded focus:border-gray-500 hover:ring-1 hover:ring-gray-500 hover:rounded"
              />
            </div>
          </div>
          <div className="w-1/2 p-2">
            <div className="relative">
              <label htmlFor="name" className="text-sm leading-8 font-body">
                Password *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-1 leading-8 transition-colors duration-200 ease-in-out border-b outline-none font-body focus:border focus:rounded focus:border-gray-500 hover:ring-1 hover:ring-gray-500 hover:rounded "
              />
            </div>
          </div>
          <div className="w-full p-2">
            <div className="relative">
              <label htmlFor="name" className="text-sm leading-8 font-body">
                Message *
              </label>
              <textarea
                id="name"
                name="name"
                className="w-full px-3 py-1 leading-8 transition-colors duration-200 ease-in-out border-b outline-none font-body focus:border focus:rounded focus:border-gray-500  hover:ring-1 hover:ring-gray-500 hover:rounded hover:border-gray-500"
              />
            </div>
          </div>

          <div className="w-full gap-4 row-center">
            <div className="w-full p-2 pt-2 mt-2 text-xs border-gray-200 text-start font-body">
              <a className="text-gray-500">example@email.com</a>
            </div>
            <div className="w-full p-2 pt-2 mt-2 col-end">
              <button className="flex font-mono text-xl border-b">
                <span>submit</span>
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
