import React from "react";

const TextError = ({ message }: { message: string | undefined }) => {
  return <div className="text-red-500">{message}</div>;
};

export default TextError;
