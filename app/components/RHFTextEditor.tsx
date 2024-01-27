import React from "react";
import {
  Control,
  Controller,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import ErrorMessage from "./ErrorMessage";

interface TextEditorProps<V extends FieldValues> {
  placeholder?: string;
  controller: UseControllerProps<V>;
}
const RHFTextEditor = <V extends FieldValues>(props: TextEditorProps<V>) => {
  const { fieldState } = useController(props.controller);
  const { error } = fieldState;

  return (
    <div>
      <Controller
        render={({ field }) => {
          return <SimpleMDE placeholder={props.placeholder} {...field} />;
        }}
        {...props.controller}
      />
      <ErrorMessage>{error?.message}</ErrorMessage>
    </div>
  );
};

export default RHFTextEditor;
