"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { IoCheckmarkSharp } from "react-icons/io5";

import React from "react";
import Icon from "@/app/components/Icon";

const NewIssuePage = () => {
  return (
    <div className="max-w-lg space-y-2">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button>
        <Icon>{IoCheckmarkSharp}</Icon>
        Submit Issue
      </Button>
    </div>
  );
};

export default NewIssuePage;
