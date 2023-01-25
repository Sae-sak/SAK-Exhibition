import {RefCallback} from "react";
import ErrorMsg from "./ErrorMsg";

interface TextFieldProps {
  id: string;
  label: string;
  error?: string;
  inputProps?: {
    onChange?: (ev: any) => unknown;
    onBlur?: (ev: any) => unknown;
    ref?: RefCallback<HTMLInputElement>;
    name?: string;
    min?: string | number;
    max?: string | number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    required?: boolean;
    disabled?: boolean;
  };
  type?: "password" | "text" | "phone-number";
}

export const TextField = (props: TextFieldProps) => {
  return (
    <div className="w-full max-w-xs form-control col-start">
      <label htmlFor={props.id}>
        <span className="">{props.label}:</span>
      </label>
      <input
        color={"ghost"}
        id={props.id}
        type={props.type ?? "text"}
        {...(props.inputProps ?? {})}
        className="border-b w-72"
      />
      {props.error ? <ErrorMsg>{props.error}</ErrorMsg> : null}
    </div>
  );
};
