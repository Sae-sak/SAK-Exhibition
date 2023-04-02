export default function MessageArea() {
  return (
    <div className="w-full p-2">
      <div className="relative">
        <label htmlFor="name" className="text-sm leading-8 font-body">
          Message *
        </label>
        <textarea
          id="name"
          name="name"
          className="w-full px-3 py-1 leading-8 transition-colors duration-200 ease-in-out border-b outline-none font-body focus:border focus:rounded focus:border-gray-500 hover:ring-1 hover:ring-gray-500 hover:rounded hover:border-gray-500"
        />
      </div>
    </div>
  );
}
