"use client";
import AlertBox from "@/app/components/AlertBox";
import Icon from "@/app/components/Icon";
import TextError from "@/app/components/TextError";
import { postIssueSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IoCheckmarkSharp } from "react-icons/io5";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type Inputs = z.infer<typeof postIssueSchema>;

const NewIssuePage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: zodResolver(postIssueSchema),
  });

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
  console.log(errors, "errors.description");
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
        {errors.title && <TextError message={errors.title.message} />}
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            console.log(field, "field");
            return <SimpleMDE placeholder="Description" {...field} />;
          }}
        />
        {errors.description && (
          <TextError message={errors.description.message} />
        )}
        <Button>
          <Icon>{IoCheckmarkSharp}</Icon>
          Submit Issue
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
