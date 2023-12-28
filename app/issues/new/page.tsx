"use client";
import AlertBox from "@/app/components/AlertBox";
import Icon from "@/app/components/Icon";
import TextError from "@/app/components/TextError";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { IoCheckmarkSharp } from "react-icons/io5";
import SimpleMDE from "react-simplemde-editor";

type Inputs = {
  title: string;
  description: string;
};

const NewIssuePage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const [error, setError] = useState("");
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setError("an unexpected error occurred.");
    }
  };

  return (
    <div className="max-w-lg">
      {error ? <AlertBox message={error} /> : null}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 mt-2">
        <TextField.Root>
          <TextField.Input
            placeholder="Title"
            {...register("title", { required: true })}
          />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <div>
          {errors.title && <TextError message="* Title is required" />}
          {errors.description && (
            <TextError message="* Description is required" />
          )}
        </div>
        <Button>
          <Icon>{IoCheckmarkSharp}</Icon>
          Submit Issue
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
