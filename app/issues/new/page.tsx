"use client";
import Icon from "@/app/components/Icon";
import TextError from "@/app/components/TextError";
import { Button, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
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

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await axios.post("/api/issues", data);
    router.push("/issues");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg space-y-2">
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
  );
};

export default NewIssuePage;
