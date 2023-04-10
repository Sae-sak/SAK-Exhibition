import { TextFieldProps } from "@type/textField";

export default function EmailField(props: TextFieldProps) {
  return (
    <div className="w-1/2 p-2">
      <div className="relative">
        <label htmlFor="email" className="text-sm leading-8 font-body">
          Email *
        </label>

        <input
          {...(props.inputProps ?? {})}
          type="text"
          id="email"
          name="email"
          autoComplete="off"
          className="w-full px-3 py-1 leading-8 transition-colors duration-200 ease-in-out border-b outline-none font-body focus:border focus:rounded focus:border-gray-500 hover:ring-1 hover:ring-gray-500 hover:rounded"
        />
      </div>
    </div>
  );
}
