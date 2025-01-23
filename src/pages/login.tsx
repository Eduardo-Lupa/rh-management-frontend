import { useForm } from "react-hook-form";
import { useAuthLogin } from "../api/hooks";
import { LoginReturn, LoginType } from "../types/login";
import { useNavigate } from "react-router";
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
        console.log("logado");
        localStorage.setItem("token", data.token);
        // localStorage.setItem("expiresIn", data.expiresIn.toString());
        navigator(`/user/${data.type}`);
        toast.success("Logado com sucesso!");
      },
      onError: (erro: any) => {
        console.log("erro");
        console.log(erro.response.data.message);
        toast.error("senha ou email errado!");
      },
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* login form */}
      <div className="flex justify-center items-center h-full">
        <div className="border border-gray-400 rounded-lg p-12 w-full max-w-md">
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
                {...register("email", { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
              />
            </div>

            {/* password */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
              />
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
