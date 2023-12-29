import { TextField as RadixTextField } from "@radix-ui/themes";
import TextError from "./TextError";
import { FieldError, UseFormRegister } from "react-hook-form";

const TextField = (props: any) => {
  return (
    <div>
      <RadixTextField.Root>
        <RadixTextField.Input {...props} />
      </RadixTextField.Root>
      {props.error ? <TextError message={props.error} /> : null}
    </div>
  );
};

export default TextField;
