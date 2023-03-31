import { TextFieldProps } from "@type/textField";
import ErrorMsg from "./ErrorMsg";

export default function SendMessage(props: TextFieldProps) {
  return (
    <div className="w-full max-w-xs form-control col-start">
      <input
        id={props.id}
        name={props.label}
        type={props.type ?? "text"}
        {...(props.inputProps ?? {})}
        className="w-full border-b"
        autoComplete={props.autoComplete ?? ""}
        placeholder={props.placeholder ?? ""}
      />
      {props.error ? <ErrorMsg>{props.error}</ErrorMsg> : null}
    </div>
  );
}
