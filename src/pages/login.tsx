import { Header } from "./header";
import { useForm } from "react-hook-form";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginButton = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex justify-center items-center h-screen">
        <div className="border border-gray-400 rounded-lg p-12 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">Bem vindo</h1>

          <form onSubmit={handleSubmit(loginButton)}>
            {/* email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                email
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
