import { TextField as RadixTextField } from "@radix-ui/themes";
import ErrorMessage from "./ErrorMessage";

const TextField = (props: any) => {
  return (
    <div>
      <RadixTextField.Root>
        <RadixTextField.Input {...props} />
      </RadixTextField.Root>
      {<ErrorMessage>{props.error}</ErrorMessage>}
    </div>
  );
};

export default TextField;
