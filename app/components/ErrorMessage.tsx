import { Text } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return <Text className="text-red-500">{children}</Text>;
};

export default ErrorMessage;
