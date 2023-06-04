import { TextFieldProps } from "@type/textField";

export default function SendMessage(props: TextFieldProps) {
  return (
    <div className="flex flex-col justify-between w-full h-full max-w-xs form-control">
      <input
        id={props.id}
        name={props.label}
        type={props.type ?? "text"}
        {...(props.inputProps ?? {})}
        className="w-full border h-7 pl-0.5"
        autoComplete={props.autoComplete ?? ""}
        placeholder={props.placeholder ?? ""}
      />
    </div>
  );
}
