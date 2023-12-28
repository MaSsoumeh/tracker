import { Callout } from "@radix-ui/themes";
import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoInformationCircleOutline,
  IoWarningOutline,
} from "react-icons/io5";
import Icon from "./Icon";

type Color = "tomato" | "green" | "sky" | "orange";

const AlertBox = ({
  message,
  variant = "error",
}: {
  message: string;
  variant?: "error" | "info" | "warning" | "success";
}) => {
  const bgColor: {
    error: Color;
    info: Color;
    warning: Color;
    success: Color;
  } = {
    error: "tomato",
    info: "sky",
    warning: "orange",
    success: "green",
  };

  const icon = {
    error: IoCloseCircleOutline,
    info: IoInformationCircleOutline,
    warning: IoWarningOutline,
    success: IoCheckmarkCircleOutline,
  };

  return (
    <Callout.Root className="mb-2" color={bgColor[variant]}>
      <Callout.Icon>
        <Icon>{icon[variant]}</Icon>
      </Callout.Icon>
      <Callout.Text>{message}</Callout.Text>
    </Callout.Root>
  );
};

export default AlertBox;
