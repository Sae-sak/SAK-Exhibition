import { TextFieldProps } from "@type/textField";
import ErrorMsg from "./ErrorMsg";

export default function SendMessage(props: TextFieldProps) {
  return (
    <div className="w-full max-w-xs form-control col-start">
      <label htmlFor={props.id}>
        <span className="">{props.label}:</span>
      </label>
      <input
        id={props.id}
        name={props.label}
        type={props.type ?? "text"}
        {...(props.inputProps ?? {})}
        className="border-b w-72"
        autoComplete={props.autoComplete ?? ""}
        placeholder={props.placeholder ?? ""}
      />
      {props.error ? <ErrorMsg>{props.error}</ErrorMsg> : null}
    </div>
  );
}
