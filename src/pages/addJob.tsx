import { useForm } from "react-hook-form";

export const AddJob = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  
  return (
    <div className="">
      <h1>Add Job</h1>
    </div>
  );
};
