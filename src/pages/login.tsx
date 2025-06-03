import { useForm } from "react-hook-form";
import { useAuthLogin } from "../api/hooks";
import { LoginReturn, LoginType } from "../types/login";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();
  const navigator = useNavigate();

  const { mutate: mutateLogin } = useAuthLogin(); // useMutation para logar

  const loginButton = (data: LoginType) => {
    mutateLogin(data, {
      onSuccess: ({ data }: { data: LoginReturn }) => {
        localStorage.setItem("token", data.token);
        // localStorage.setItem("expiresIn", data.expiresIn.toString());
        navigator(`/user`);
        toast.success("Logado com sucesso!"); // TODO: revisar necessidade
      },
      onError: (erro: any) => {
        console.log(erro.response.data.message);
        toast.error("Email ou Senha incorreto!");
      },
    });
  };

  return (
    <div className="flex flex-1 h-[90%]">
      {/* login form */}
      <div className="flex justify-center items-center w-full">
        <div className="border border-gray-200 rounded-lg p-12 w-full max-w-md shadow-md">
          <h1 className="text-3xl font-bold text-center mb-6">Bem vindo</h1>

          <form onSubmit={handleSubmit(loginButton)}>
            {/* email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                {...register("email", {
                  required: "Email é obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido",
                  },
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Digite seu email"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            {/* password */}
            <div className="">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: "Senha é obrigatório" })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Digite sua senha"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>

            {/* forgot password */}
            <div className="mb-6">
              <Link
                to="/login/forgot-password"
                className="text-sm text-sky-500 underline cursor-pointer hover:text-sky-600"
              >
                Esqueceu a senha?
              </Link>
            </div>

            {/* submit button */}
            <button
              type="submit"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
