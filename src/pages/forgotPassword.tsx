import { toast } from "react-toastify";
import { useForgotPassword } from "../api/hooks";
import { useForm } from "react-hook-form";

export const ForgotPassword = () => {
  const { mutate: mutateForgotPassword } = useForgotPassword();
  const { register, handleSubmit } = useForm();

  const forgotPassword = (data: any) => {
    mutateForgotPassword({ email: data.email }, {
      onSuccess: () => {
        toast.success("Email enviado com sucesso!");
      },
      onError: (error) => {
        console.log(error);
        toast.error("Erro ao enviar o email!");
      },
    });
  };

  return (
    <div className="flex min-h-[90vh] justify-center items-center px-4">
      <div className="flex flex-col border border-gray-200 bg-white gap-3 shadow-lg px-8 pt-8 pb-3 rounded-md text-center max-w-md w-full">
        <p className="text font-OpenSans font-semibold">Esqueceu sua senha?</p>
  
        <p className="text font-OpenSans font-semibold">
          Digite seu e-mail e enviaremos um link para redefinir sua senha.
        </p>
  
        <form onSubmit={handleSubmit(forgotPassword)} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="border border-gray-300 rounded-md p-2 w-full"
            {...register("email", { required: true })}
          />
  
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded-md mt-4"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
