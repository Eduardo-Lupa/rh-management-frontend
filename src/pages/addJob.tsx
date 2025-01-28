import { useForm } from "react-hook-form";
import { useCreateJob } from "../api/hooks";
import { toast } from "react-toastify";

export const AddJob = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: mutateCreateJob } = useCreateJob();

  const createButton = (data: any) => {
    mutateCreateJob(data, {
      onSuccess: () => {
        toast.success("Criado com sucesso!");
        reset();
      },
      onError: (erro: any) => {
        console.log(erro.response.data.message);
        toast.error("Erro ao criar!");
      },
    });
  };

  return (
    <div className="bg-gray-100 w-full px-4">
      <form onSubmit={handleSubmit(createButton)}>
        {/* title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
        </div>

        {/* description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the job description"
          />
        </div>

        {/* initial_salary */}
        <div className="mb-4">
          <label
            htmlFor="initial_salary"
            className="block text-gray-700 font-bold mb-2"
          >
            Initial Salary
          </label>
          <input
            type="number"
            id="initial_salary"
            {...register("initial_salary", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the initial salary"
          />
        </div>

        {/* final_salary */}
        <div className="mb-4">
          <label
            htmlFor="final_salary"
            className="block text-gray-700 font-bold mb-2"
          >
            Final Salary
          </label>
          <input
            type="number"
            id="final_salary"
            {...register("final_salary", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the final salary"
          />
        </div>

        {/* job_cost_value */}
        <div className="mb-4">
          <label
            htmlFor="job_cost_value"
            className="block text-gray-700 font-bold mb-2"
          >
            Job Cost Value
          </label>
          <input
            type="number"
            id="job_cost_value"
            {...register("job_cost_value", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the job cost value"
          />
        </div>

        {/* expires_at */}
        <div className="mb-4">
          <label
            htmlFor="expires_at"
            className="block text-gray-700 font-bold mb-2"
          >
            Expires At
          </label>
          <input
            type="date"
            id="expires_at"
            {...register("expires_at", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* submit button */}
        <button
          type="submit"
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Criar
        </button>
      </form>
    </div>
  );
};
