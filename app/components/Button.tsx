import { Button as RadixButton } from "@radix-ui/themes";
import { ElementType, ReactNode } from "react";
import Icon from "./Icon";
import Spinner from "./Spinner";

type Props = {
  icon?: ElementType;
  children: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
};

const Button = (props: Props) => {
  const { icon, children, isLoading, disabled } = props;
  return (
    <RadixButton disabled={disabled}>
      {icon && !isLoading && <Icon>{icon}</Icon>}
      {isLoading && <Spinner />}
      {children}
    </RadixButton>
  );
};

export default Button;
