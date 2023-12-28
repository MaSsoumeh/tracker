import { ElementType } from "react";

const Icon = ({ children }: { children: ElementType }) => {
  const MyIcon = children;
  return <MyIcon className="w-5 h-5" />;
};

export default Icon;
