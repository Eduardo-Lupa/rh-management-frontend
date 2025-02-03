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
    <div className="flex h-[90%] justify-center items-center">
      <div className="flex flex-col border border-gray-200 bg-white gap-3 shadow-lg px-8 pt-8 pb-3 rounded-md text-center">
        <p className="text font-OpenSans font-semibold">Esqueceu sua senha?</p>

        <p className="text font-OpenSans font-semibold">
          Digite seu e-mail e enviaremos um link para redefinir sua senha.
        </p>

        <form onSubmit={handleSubmit(forgotPassword)}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="border border-gray-300 rounded-md p-2 w-full"
            {...register("email", { required: true })}
          />

          <button
            type="submit"
            className="bg-black text-white py-1 px-2 mx-auto rounded-md mt-6"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
